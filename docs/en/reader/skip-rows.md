# Skip rows

* Reader support is available on Windows in version `1.3.4.1` and later.
* The extension version must be `1.2.7` or later.
* When installing from PECL, answer `yes` when prompted to enable reader support.

## Test data

```php
$config = ['path' => './tests'];
$excel  = new \Vtiful\Kernel\Excel($config);

$filePath = $excel->fileName('tutorial.xlsx')
    ->header(['', 'Cost'])
    ->data([
        [],
        ['viest', '']
    ])
    ->output();
```

## Skip one row

```php
$data = $excel->openFile('tutorial.xlsx')
    ->openSheet('Sheet1')
    ->setSkipRows(1)
    ->getSheetData();
```

## Skip two rows

```php
$data = $excel->openFile('tutorial.xlsx')
    ->openSheet('Sheet1')
    ->setSkipRows(2)
    ->getSheetData();
```
