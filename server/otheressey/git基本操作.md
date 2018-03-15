# git基本操作
- git init 初始化仓库。（在本地生成仓库 .git文件）
- git status 查看仓库的状态 （查看工作树和仓库）
- git add 向暂存区中添加文件（暂存区是提交之前的一个临时区域）
- git commit 保存仓库的历史记录 （可以将当前暂存区中的文件实际保存到仓库的历史记录中去）
```
$ git commit -m "First commit" //-m之后提交信息，是对这个信息的概述
```
- git log 查看提交日志（可以查看什么人在什么时候提交或合并，以及操作前后有何差别）
- git diff 查看更改前后的差别 
- git diff HEAD 查看最新提交差别。
在执行git commit之前，先执行git diff HEAD命令，查看本次提交与上一次提交有何差别，确认完毕之后再进行提交

## 分支的操作
- git branch 显示分支的一览表
- git checkout -b 创建，切换分支
- git branch 创建分支
- git checkout 切换分支
- git merge 合并分支
- git log --graph 以图表形式查看分支
- git reset 回溯历史版本
```
git reset --hard+哈希值
```
- git reflog