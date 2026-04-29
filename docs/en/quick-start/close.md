# Close manually

All resources are released automatically when the PHP object reaches the end of its lifecycle. In long-running scripts, you can explicitly close open file handles and release native resources with `close()`.

## Function Prototype

```php
close(): self
```

## Example

```php
$config = [
    'path' => '/home/viest'
];

$excel = new \Vtiful\Kernel\Excel($config);
$filePath = $excel->fileName('tutorial01.xlsx')
    ->header(['Item', 'Cost'])
    ->output();

$excel->close();
```
