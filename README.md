## Why use xlswriter

Please refer to the image below. PHPExcel has been unable to work properly for memory reasons at 40,000 and 100000 points, but it can be resolved by modifying the ini configuration, but the time may take longer to complete the work;

![php-excel](resource/performance_comparison.png)

xlswriter is a PHP C Extension that can be used to write text, numbers, formulas and hyperlinks to multiple worksheets in an Excel 2007+ XLSX file. It supports features such as:

###### Writer

* 100% compatible Excel XLSX files.
* Full Excel formatting.
* Merged cells.
* Defined names.
* Autofilters.
* Charts.
* Data validation and drop down lists.
* Worksheet PNG/JPEG images.
* Memory optimization mode for writing large files.
* Works on Linux, FreeBSD, OpenBSD, OS X, Windows.
* Compiles for 32 and 64 bit.
* FreeBSD License.
* The only dependency is on zlib.

###### Reader

* Full read data
* Cursor read data
* Read by data type

#### Install

###### Unix

```bash
pecl install xlswriter
```

###### Windows

[download dll](https://github.com/viest/php-ext-xlswriter/releases)

#### Benchmark

Test environment: Macbook Pro 13 inch, Intel Core i5, 16GB 2133MHz LPDDR3 Memory, 128GB SSD Storage.

##### Export

> Two memory modes export 1 million rows of data (27 columns, data is string)

* Normal mode: only 29S is needed, and the memory only needs 2083MB;
* Fixed memory mode: only need 52S, memory only needs <1MB;

##### Import

> 1 million rows of data (1 columns, data is inter)

* Full mode: Just 3S, the memory is only 558MB;
* Cursor mode: Just 2.8S, memory is only <1MB;

## [Documents](https://xlswriter-docs.viest.me/)

Includes extensive and detailed instructions that make it easy to get started with xlswriter.

## Fork Information

This project is a fork of [viest/php-ext-xlswriter](https://github.com/viest/php-ext-xlswriter).  
Respect and thanks to the original author and contributors for their excellent work.

## License

BSD License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fviest%2Fphp-ext-xlswriter.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fviest%2Fphp-ext-xlswriter?ref=badge_large)
