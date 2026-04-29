# Read file by data type

* Reader support is available on Windows in version `1.3.4.1` and later.
* The extension version must be `1.2.7` or later.
* When installing from PECL, answer `yes` when prompted to enable reader support.

## Compiling

Add `--enable-reader` when compiling from source.

```bash
./configure --enable-reader
```

## Type array

The type array uses zero-based column indexes. For example, when the third column is a timestamp, configure it with index `2`:

```php
[
    2 => \Vtiful\Kernel\Excel::TYPE_TIMESTAMP,
]
```

## Example

```php
$config = ['path' => './tests'];
$excel = new \Vtiful\Kernel\Excel($config);

$filePath = $excel->fileName('tutorial.xlsx')
    ->header(['Item', 'Cost'])
    ->output();

$excel->openFile('tutorial.xlsx')
    ->openSheet();

var_dump($excel->nextRow([
    \Vtiful\Kernel\Excel::TYPE_STRING,
    \Vtiful\Kernel\Excel::TYPE_STRING
]));
```
