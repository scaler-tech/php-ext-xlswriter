# Read file (full amount)

* Reader support is available on Windows in version `1.3.4.1` and later.
* The extension version must be `1.2.7` or later.
* When installing from PECL, answer `yes` when prompted to enable reader support.

## Compiling

Add `--enable-reader` when compiling from source.

```bash
./configure --enable-reader
```

## Example

```php
$config   = ['path' => './tests'];
$excel    = new \Vtiful\Kernel\Excel($config);

$filePath = $excel->fileName('tutorial.xlsx')
    ->header(['Item', 'Cost'])
    ->output();

$data = $excel->openFile('tutorial.xlsx')
    ->openSheet()
    ->getSheetData();

var_dump($data);
```
