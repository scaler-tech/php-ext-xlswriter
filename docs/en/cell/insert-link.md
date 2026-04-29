# Insert link

### **Function Prototype**

```php
insertUrl(int $row, int $column, string $url[, ?string $text, ?string $toolTip, resource $formatHandler]): self
```

#### **int $row**

> cell row

#### **int $column**

> cell column

#### **string $url**

> link address

#### **string $text**

> Optional link text

#### **string $toolTip**

> Optional link tooltip

#### **resource $formatHandler**

> link style

### Example

```php
$excel = new \Vtiful\Kernel\Excel($config);

$urlFile = $excel->fileName("free.xlsx")
    ->header(['url']);

$fileHandle = $urlFile->getHandle();

$format   = new \Vtiful\Kernel\Format($fileHandle);
$urlStyle = $format->bold()
    ->underline(\Vtiful\Kernel\Format::UNDERLINE_SINGLE)
    ->toResource();

$urlFile->insertUrl(1, 0, 'https://github.com', null, null, $urlStyle);

$urlFile->output();
```
