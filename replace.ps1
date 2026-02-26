$path = "c:\Users\march\Downloads\gorianka\brands.html"
$content = Get-Content -Path $path -Raw -Encoding UTF8

$content = $content -replace '<h3 class="font-serif text-xl font-bold text-charcoal">Монастирський</h3>', '<h3 class="font-serif text-xl font-bold text-charcoal">Монашинські Сири</h3>'
$content = $content -replace '<h3 class="font-serif text-xl font-bold text-charcoal">М''ясна Гільдія</h3>', '<h3 class="font-serif text-xl font-bold text-charcoal">М''ясна Історія</h3>'
$content = $content -replace '<h3 class="font-serif text-xl font-bold text-charcoal">Дергачівський</h3>', '<h3 class="font-serif text-xl font-bold text-charcoal">Дергачівський М''ясокомбінат</h3>'

# Remove Royal Tiger Logo Box
$content = $content -replace '(?s)<div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">\s*<img src="images/brand_royaltiger_logo.png" alt="ROYAL TIGER" class="w-full h-full object-contain" />\s*</div>', ''

# Remove Оце Лаваш Logo Box
$content = $content -replace '(?s)<div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">\s*<img src="images/brand_otselavash_logo.jpeg" alt="Оце Лаваш" class="w-full h-full object-contain" />\s*</div>', ''

Set-Content -Path $path -Value $content -Encoding UTF8
Write-Output "Done replacing in brands.html"
