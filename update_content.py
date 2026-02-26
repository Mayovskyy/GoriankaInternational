import re
import os

i18n_path = r'c:\Users\march\Downloads\gorianka\i18n.js'
brands_path = r'c:\Users\march\Downloads\gorianka\brands.html'

# Update i18n.js
with open(i18n_path, 'r', encoding='utf-8') as f:
    i18n_content = f.read()

translations_to_update = {
    # UK
    "'brand.royaltiger.desc': 'Міжнародний бренд від Heuschen & Schrouff для приготування азійських страв. Рис жасмин та суші, рисовий папір, соуси, локшина.': 'Листя норі і рис, соуси для приготування азійських страв.',": 
        "'brand.royaltiger.desc': 'Листя норі і рис, соуси для приготування азійських страв.',",
    # (Fallback if previous is not matching exactly)
    "'brand.royaltiger.desc': 'Міжнародний бренд від Heuschen & Schrouff для приготування азійських страв. Рис жасмин та суші, рисовий папір, соуси, локшина, норі та інші автентичні інгредієнти азійської кухні.',":
        "'brand.royaltiger.desc': 'Листя норі і рис, соуси для приготування азійських страв.',",
    
    "'brand.teplimorya.desc': 'Морепродукти та заморожена риба від ТМ Теплі Моря. Креветки, кальмари, мідії та асорті морепродуктів. Швидке заморожування зберігає свіжість та поживні речовини.',":
        "'brand.teplimorya.desc': 'Джерки, снеки до пива і лососева соломка, рибні палички.',",
    "'brand.teplimorya.desc': 'Морепродукти та заморожена риба від ТМ Теплі Моря. Креветки, кальмари, мідії та асорті морепродуктів.',":
        "'brand.teplimorya.desc': 'Джерки, снеки до пива і лососева соломка, рибні палички.',",
        
    "'brand.rybnafishka.desc': 'Широкий асортимент рибної продукції: слабосолена форель та сьомга, різноманітні пресерви та маринована риба. Продукція представлена в мережах Сільпо, Fozzy, Metro та провідних магазинах України.',":
        "'brand.rybnafishka.desc': 'Слабосолена риба.',",
    "'brand.rybnafishka.desc': 'Широкий асортимент рибної продукції: слабосолена форель та сьомга, різноманітні пресерви та маринована риба.',":
        "'brand.rybnafishka.desc': 'Слабосолена риба.',",
        
    "'brand.onur.desc': 'Турецький виробник кондитерських виробів, напоїв та снеків. Халва, тахіні, рахат-лукум, айран та турецькі солодощі. Широко представлений у роздробі України.',":
        "'brand.onur.desc': 'Айран.',",
    "'brand.onur.desc': 'Турецький виробник кондитерських виробів, напоїв та снеків. Халва, тахіні, рахат-лукум, айран та турецькі солодощі.',":
        "'brand.onur.desc': 'Айран.',",
        
    "'brand.sladosvit.desc': 'Морозиво та заморожені десерти від одного з найбільших українських виробників. Широкий асортимент від класики до преміальних сортів.',":
        "'brand.sladosvit.desc': 'Згущене молоко, іриска, сухе молоко.',",
        
    "'brand.cucina.desc': 'Преміальні сири у стилі італійської кухні. Рикота, маскарпоне, моцарела та твердий пармезан. Виготовлено за оригінальними рецептурами для гастрономічного сегменту ринку.',":
        "'brand.cucina.desc': 'Вершки кулінарні.',",
    "'brand.cucina.desc': 'Преміальні сири у стилі італійської кухні. Рикота, маскарпоне, моцарела та твердий пармезан. Виготовлено за оригінальними рецептурами.',":
        "'brand.cucina.desc': 'Вершки кулінарні.',",
        
    "'brand.monashynski.desc': 'Традиційні монастирські сири з 1879 року. Унікальні рецептури, витримані тверді та напівтверді сири з натурального молока.',":
        "'brand.monashynski.desc': 'Вони роблять для нас косичку, соломку, паличку фасовану і на вагу.',",
        
    "'brand.myasnaist.desc': 'Широкий асортимент ковбасної продукції: варені, напівкопчені та сирокопчені ковбаси, шинки, сосиски та сардельки за перевіреними рецептурами.',":
        "'brand.myasnaist.desc': 'Вони роблять для нас сирокопчені ковбаси, кабаноси, нарізки.',",

    # EN
    "'brand.royaltiger.desc': 'International brand by Heuschen & Schrouff for authentic Asian cooking. Jasmine and sushi rice, rice paper, sauces, noodles, nori and other authentic Asian cuisine ingredients.',":
        "'brand.royaltiger.desc': 'Nori leaves and rice, sauces for Asian cuisine.',",
    
    "'brand.teplimorya.desc': 'Seafood and frozen fish from TM Tepli Morya. Shrimp, squid, mussels and seafood assortments. Quick-freezing preserves freshness and nutrients.',":
        "'brand.teplimorya.desc': 'Jerky, beer snacks and salmon sticks, fish sticks.',",
        
    "'brand.rybnafishka.desc': 'Wide range of fish products: lightly salted trout and salmon, various preserves and marinated fish. Available at Silpo, Fozzy, Metro and leading Ukrainian stores.',":
        "'brand.rybnafishka.desc': 'Lightly salted fish.',",
        
    "'brand.onur.desc': 'Turkish producer of confectionery, drinks and snacks. Halva, tahini, Turkish delight, ayran and other Turkish sweets. Widely available in Ukrainian retail.',":
        "'brand.onur.desc': 'Ayran.',",
        
    "'brand.sladosvit.desc': 'Ice cream and frozen desserts from one of Ukraine\\'s largest producers. Wide range from classics to premium varieties.',":
        "'brand.sladosvit.desc': 'Condensed milk, toffee, powdered milk.',",
        
    "'brand.cucina.desc': 'Premium cheeses in the Italian cuisine style. Ricotta, mascarpone, mozzarella and hard parmesan. Made to original recipes for the gourmet market segment.',":
        "'brand.cucina.desc': 'Culinary cream.',",
        
    "'brand.monashynski.desc': 'Traditional monastic cheeses since 1879. Unique recipes, aged hard and semi-hard cheeses from natural milk.',":
        "'brand.monashynski.desc': 'They make for us braided cheese, sticks, packaged and by weight.',",
        
    "'brand.myasnaist.desc': 'Wide range of sausage products: cooked, semi-smoked and dry-cured sausages, hams, frankfurters and sausages made to proven recipes.',":
        "'brand.myasnaist.desc': 'They make for us raw smoked sausages, kabanosy, cold cuts.',",
}

for old, new in translations_to_update.items():
    i18n_content = i18n_content.replace(old, new)

with open(i18n_path, 'w', encoding='utf-8') as f:
    f.write(i18n_content)

# Update brands.html
with open(brands_path, 'r', encoding='utf-8') as f:
    brands_content = f.read()

# 1. Монастирський -> Монашинські Сири
brands_content = brands_content.replace('<h3 class="font-serif text-xl font-bold text-charcoal">Монастирський</h3>', '<h3 class="font-serif text-xl font-bold text-charcoal">Монашинські Сири</h3>')

# 2. М'ясна Гільдія -> М'ясна Історія
brands_content = brands_content.replace('<h3 class="font-serif text-xl font-bold text-charcoal">М\'ясна Гільдія</h3>', '<h3 class="font-serif text-xl font-bold text-charcoal">М\'ясна Історія</h3>')

# 3. Дергачівський -> Дергачівський М'ясокомбінат
brands_content = brands_content.replace('<h3 class="font-serif text-xl font-bold text-charcoal">Дергачівський</h3>', '<h3 class="font-serif text-xl font-bold text-charcoal">Дергачівський М\'ясокомбінат</h3>')

# 4. Royal Tiger logo removal
# We want to remove the specific div:
# <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">\s*<img src="images/brand_royaltiger_logo.png"[^>]+>\s*</div>
brands_content = re.sub(
    r'<div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">\s*<img src="images/brand_royaltiger_logo.png"[^>]+>\s*</div>',
    '',
    brands_content
)

# 5. Оце Лаваш logo removal
brands_content = re.sub(
    r'<div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">\s*<img src="images/brand_otselavash_logo.jpeg"[^>]+>\s*</div>',
    '',
    brands_content
)

with open(brands_path, 'w', encoding='utf-8') as f:
    f.write(brands_content)

print("Update completed successfully.")
