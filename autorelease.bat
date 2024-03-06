@echo off

:: 獲取最新的版本號
powershell "(Select-String -Path .\更新说明.txt -Pattern '\[\d.\d.\d' | foreach-object % {$_.line -replace '[\[\]]',''}) | Select-Object -First 1" > version
set /p TARGET=<version
del version

echo Latest version is %TARGET% ...

:: 創建文件夾以及清理一下文件x
del ".\Release\Ex_DirectUI %TARGET%.zip"
mkdir .\Release\
mkdir .\Release\%TARGET%

:: 複製demo目錄
robocopy .\Demo .\Release\%TARGET%\Demo -E

:: 複製res目錄
robocopy .\Res .\Release\%TARGET%\Res -E

:: 複製source目錄
robocopy .\Source .\Release\%TARGET%\Source -E

::複製theme目錄
robocopy .\Theme .\Release\%TARGET%\Theme -E

:: 複製二進制文件
copy .\libexdui.dll .\Release\%TARGET%\libexdui.dll

:: 複製頭文件
copy .\libexdui.h .\Release\%TARGET%\libexdui.h
copy .\libexdui.lib .\Release\%TARGET%\libexdui.lib

:: 更新説明
copy .\更新说明.txt .\Release\%TARGET%\更新说明.txt
copy .\注意事项.txt .\Release\%TARGET%\注意事项.txt

:: 坑爹的主題文件
copy .\Theme\Default.ext .\Release\%TARGET%\Default.ext

::打包壓縮
echo Creating zipped file...
powershell Compress-Archive -Path .\Release\%TARGET%\* -CompressionLevel Fastest -DestinationPath '.\Release\Ex_DirectUI %TARGET%.zip'

:: 清理文件
rmdir /q /s .\Release\%TARGET%

echo New release published. _(:3) z)_

:: Sleep(3000)
ping 127.0.0.1 -n 3 > nul
