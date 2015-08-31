## Solutions:
#### L1: Introduction to Git Commands:
```
git commit -m "C2" 
git commit -m "C3" 
```

#### L2: Branching in Git: 
```
git branch bugFix 
git checkout bugFix 
```

#### L3: Merging in Git: 
```
git checkout -b bugFix
git commit -m "C2" 
git checkout master 
git commit -m "C3" 
git merge bugFix 
```

#### L4: Rebase Introduction: 
```
git checkout -b bugFix 
git commit -m "C2" 
git checkout master 
git commit -m "C3" 
git checkout bugFix 
git rebase master 
```

#### L5: Detach yo' HEAD: 
```
git checkout C4 
```

#### L6: Relative Refs #1: 
```
git checkout bugFix^ 
```

#### L7: Relative Refs #2: 
```
git branch -f master C6 
git checkout HEAD~1 
git branch -f bugFix HEAD~1 
```

#### L8: Reversing Changing in Git: 
```
git reset HEAD^ 
git checkout pushed 
git revert HEAD 
```

## Git Exercise Progress:

![image](https://dl.dropboxusercontent.com/s/x36xnkibp5eirnc/git_exercise.png?dl=0)

