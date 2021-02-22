#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const ejs = require('ejs');

let promptList = [
    {
        type: 'input',
        name: 'name',
        message: 'Project name?'
    },
    {
        type: 'list',
        message: '请选择一种开发语言:',
        name: 'language',
        choices: [
            "javascript",
            "Java",
            "node"
        ],
    }
];

inquirer.prompt(promptList)
    .then(answer => {
        // 回答内容

        // 模板目录
        const tmplDir = path.join(__dirname, 'template');

        // 目标目录
        const destDir = process.cwd()

        // 将模板下的文件全部转换到目标目录
        fs.readdir(tmplDir, (err, files) => {
            if (err) throw err
            files.forEach(file => {
                // 通过模板引擎渲染文件
                ejs.renderFile(path.join(tmplDir, file), answer, (err, result) => {
                    if (err) throw err

                    // 将结果写入目标文件路径
                    fs.writeFileSync(path.join(destDir, file), result)
                })
            })
        })

    });