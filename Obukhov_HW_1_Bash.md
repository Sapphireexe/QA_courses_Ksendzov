### Linux terminal (GitBash) commands

**1)** Посмотреть где я
>$ pwd

**2)** Создать папку
>$ mkdir -v folder_1

**3)** Зайти в папку
>$ cd folder_1

**4)** Создать 3 папки
>$ mkdir -v folder_2 folder_3 folder_4

**5)** Зайти в любоую папку
>$ cd folder_2

**6)** Создать 5 файлов (3 txt, 2 json)
>$ touch file_1.txt file_2.txt file_3.txt file_4.json file_5.json

**7)** Создать 3 папки
>$ mkdir -v folder{_5,_6,_7}

**8)** Вывести список содержимого папки
>$ ls -la

**9)** + Открыть любой txt файл

**10)** + написать туда что-нибудь, любой текст.

**11)** + сохранить и выйти.
>$ vim file_2.txt  

*жму `Insert`* 
>text123text123text123

*жму `Esc`* 
>:wq

*жму `Enter`*

**12)** Выйти из папки на уровень выше
>$ cd ..

**13)** переместить любые 2 файла, которые вы создали, в любую другую папку.
>$ mv folder_2/file_{1,2}.txt folder_2/folder_5

**14)** скопировать любые 2 файла, которые вы создали, в любую другую папку.
>$ cp folder_2/folder_5/file_{1,2}.txt folder_2

**15)** Найти файл по имени
>$ find -name file_1.txt

**16)** просмотреть содержимое в реальном времени (команда grep) изучите как она работает.
>$ tail -f -v -n3 folder_2/file_1.txt

*дописываю строки в текстовом редакторе в оболочке ОС в файл и сохраняю его, жму после всего в консоли `Ctrl`+`C` для остановки отслеживания файла*

*также можно выполнить следующей командой, на каждое слово `log` в файле **Bash** будет писать его в консоле*

>$ tail -f folder_2/file_1.txt | grep log

**17)** вывести несколько первых строк из текстового файла
>$ head -n 5 folder_2/file_1.txt

**18)** вывести несколько последних строк из текстового файла
>$ tail -n 5 folder_2/file_1.txt

**19)** просмотреть содержимое длинного файла (команда less) изучите как она работает.

*создал 100 строк в файле file_1.txt с содержанием `string_1` .. `string_100` (через Excel)*
>$ less -N -E folder_2/file_1.txt

*Доходя до последней 100-й строки (клавиша `Enter` - листать вниз), утилита `less` закрывается автоматически из-за ключа* `-E`

**20)** вывести дату и время
>$ date

`=========`

**Задание \***

**1)** Отправить http запрос на сервер. http://162.55.220.72:5005/terminal-hw-request

>$ curl http://162.55.220.72:5005/terminal-hw-request

`  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   237  100   237    0     0   2934      0 --:--:-- --:--:-- --:--:--  2962{"Intro":"Hello!! This is your the first response from server","Tasks":{"Task_1":"Send the next URL in terminal: http://162.55.220.72:5005/get_method?name=(set_your_String)&age=(set_your_number)","result":["Your_String","Your_number"]}}`

>$ curl "http://162.55.220.72:5005/get_method?name=Anatoly&age=33"

`  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    17  100    17    0     0    185      0 --:--:-- --:--:-- --:--:--   186["Anatoly","33"]`

**2)** Написать скрипт который выполнит автоматически пункты 3, 4, 5, 6, 7, 8, 13

``` bash
#!/bin/bash

mkdir -v folder_1

echo "3) Зайти в папку"
cd folder_1

echo "4) Создать 3 папки"
mkdir -v folder_2 folder_3 folder_4

echo "5) Зайти в любоую папку"
cd folder_2

echo "6) Создать 5 файлов (3 txt, 2 json)"
touch file_1.txt file_2.txt file_3.txt file_4.json file_5.json

echo "7) Создать 3 папки"
mkdir -v folder_5 folder_5/folder_6 folder_5/folder_7

echo "8) Вывести список содержимого папки"
ls -la

echo "13) переместить любые 2 файла, которые вы создали, в любую другую папку."
mv file_{1,2}.txt folder_5
```
