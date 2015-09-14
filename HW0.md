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


## Git Hooks
#### post-commit Script:
```
#!/bin/sh

xdg-open https://github.ncsu.edu/ndgandh2/git-hooks
```

#### Screencast Link:
[![ScreenShot](https://dl.dropboxusercontent.com/s/m6u3czzrcn1m2d6/Screenshot%20from%202015-08-31%2002%3A24%3A02.png?dl=0)](https://dl.dropboxusercontent.com/s/8brahms8epthwnt/Kazam_screencast_00000.mp4?dl=0)
