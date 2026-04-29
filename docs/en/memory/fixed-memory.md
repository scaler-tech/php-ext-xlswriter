# Fixed memory mode

## Memory

Maximum memory usage = maximum one row of data usage

## Notes

In fixed memory mode, cell data is flushed to disk row by row. After a row has been flushed, it cannot be modified.

## Function Prototype

```php
constMemory(string $fileName[, ?string $sheetName = 'Sheet1', bool $enableZip64 = true]): self
```

## ZIP64 compatibility

`constMemory()` enables ZIP64 by default. WPS Office may report ZIP64 workbooks as corrupted on some platforms. Pass `false` as the third argument when you need WPS compatibility and do not need ZIP64.

## Enable ZIP64

```php
$config = ['path' => './tests'];
$excel  = new \Vtiful\Kernel\Excel($config);

$fileObject = $excel->constMemory('tutorial01.xlsx');
$fileHandle = $fileObject->getHandle();

$format    = new \Vtiful\Kernel\Format($fileHandle);
$boldStyle = $format->bold()->toResource();

$fileObject->setRow('A1', 10, $boldStyle)
    ->header(['name', 'age'])
    ->data([['viest', 21]])
    ->output();
```

## Disable ZIP64

```php
$config = ['path' => './tests'];
$excel  = new \Vtiful\Kernel\Excel($config);

$fileObject = $excel->constMemory('tutorial01.xlsx', null, false);
$fileHandle = $fileObject->getHandle();

$format    = new \Vtiful\Kernel\Format($fileHandle);
$boldStyle = $format->bold()->toResource();

$fileObject->setRow('A1', 10, $boldStyle)
    ->header(['name', 'age'])
    ->data([['viest', 21]])
    ->output();
```
