@echo off

:: �@ȡ���µİ汾̖
powershell "(Select-String -Path .\����˵��.txt -Pattern '\[\d.\d.\d' | foreach-object % {$_.line -replace '[\[\]]',''}) | Select-Object -First 1" > version
set /p TARGET=<version
del version

echo Latest version is %TARGET% ...

:: �����ļ��A�Լ�����һ���ļ�x
del ".\Release\Ex_DirectUI %TARGET%.zip"
mkdir .\Release\
mkdir .\Release\%TARGET%

:: �}�udemoĿ�
robocopy .\Demo .\Release\%TARGET%\Demo -E

:: �}�uresĿ�
robocopy .\Res .\Release\%TARGET%\Res -E

:: �}�usourceĿ�
robocopy .\Source .\Release\%TARGET%\Source -E

::�}�uthemeĿ�
robocopy .\Theme .\Release\%TARGET%\Theme -E

:: �}�u���M���ļ�
copy .\libexdui.dll .\Release\%TARGET%\libexdui.dll

:: �}�u�^�ļ�
copy .\libexdui.h .\Release\%TARGET%\libexdui.h
copy .\libexdui.lib .\Release\%TARGET%\libexdui.lib

:: �����h��
copy .\����˵��.txt .\Release\%TARGET%\����˵��.txt
copy .\ע������.txt .\Release\%TARGET%\ע������.txt

:: �ӵ������}�ļ�
copy .\Theme\Default.ext .\Release\%TARGET%\Default.ext

::������s
echo Creating zipped file...
powershell Compress-Archive -Path .\Release\%TARGET%\* -CompressionLevel Fastest -DestinationPath '.\Release\Ex_DirectUI %TARGET%.zip'

:: �����ļ�
rmdir /q /s .\Release\%TARGET%

echo New release published. _(:3) z)_

:: Sleep(3000)
ping 127.0.0.1 -n 3 > nul
