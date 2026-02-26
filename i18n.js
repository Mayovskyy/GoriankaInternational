// ============================
// GORIANKA — i18n.js
// Language switcher: UK (default) / EN
// ============================

const translations = {
    uk: {
        // NAV
        'nav.home': 'Головна',
        'nav.products': 'Наша Продукція',
        'nav.brands': 'Бренди-Партнери',
        'nav.about': 'Про Нас',
        'nav.contacts': 'Контакти',
        'nav.cta': "Зв'язатись",
        'nav.cta.phone': '+38 067 777 14 93',

        // FOOTER
        'footer.nav.title': 'Навігація',
        'footer.contacts.title': 'Контакти',
        'footer.addresses.title': 'Наші Адреси',
        'footer.phone.label': 'Телефон',
        'footer.email.label': 'Email',
        'footer.hours.label': 'Години роботи',
        'footer.hours.weekdays': 'Пн–Пт: 08:00 – 18:00',
        'footer.hours.saturday': 'Сб: 09:00 – 14:00',
        'footer.address.lviv': 'Львів',
        'footer.address.lviv.street': 'вул. Промислова 50/52',
        'footer.address.ternopil': 'Тернопіль',
        'footer.address.ternopil.street': 'вул. Поліська 14',
        'footer.address.stryi': 'Стрий',
        'footer.address.stryi.street': 'вул. Крива 4',
        'footer.address.lutsk': 'Луцьк',
        'footer.address.lutsk.street': 'вул. І. Франка 44',
        'footer.copyright': '© 2024 Торговий Дім «Горянка». Всі права захищено.',
        'footer.address.bottom': 'м. Львів, вул. Промислова 50/52',
        'footer.link.home': 'Головна',
        'footer.link.products': 'Продукція',
        'footer.link.brands': 'Бренди',
        'footer.link.contacts': 'Контакти',
        'footer.partner': 'Надійний партнер, який дбає про якість та задоволення ваших потреб у харчових продуктах.',

        // INDEX — HERO
        'hero.badge': 'Засновано у Львові, 2014',
        'hero.h1.line1': 'Українські',
        'hero.h1.line2': 'Традиції',
        'hero.h1.line3': 'Сучасна Якість',
        'hero.subtitle': "Провідний дистриб'ютор м'ясо-ковбасної, молочної та рибної продукції на заході України. Перевірені виробники, найвищі стандарти якості.",
        'hero.btn.catalog': 'Переглянути Каталог',
        'hero.btn.contact': "Зв'язатися з нами",
        'hero.stat.years': 'Років досвіду',
        'hero.stat.brands': 'Брендів-партнерів',
        'hero.stat.cities': 'Міста присутності',

        // INDEX — INTRO
        'intro.badge': 'Наша Місія',
        'intro.h2': 'Надійний Партнер<br />для Вашого Бізнесу',
        'intro.p1': 'Заснована у 2014 році у мальовничому місті Львів, компанія «Горянка» є провідним гравцем у сфері дистрибуції харчових продуктів на західній Україні.',
        'intro.p2': "Ми спеціалізуємося на постачанні якісної м'ясо-ковбасної, молочної продукції та інших продовольчих товарів. Наші партнери — це перевірені українські та європейські виробники, які гарантують найвищий рівень якості.",
        'intro.btn': 'Дізнатися більше',
        'intro.feat.quality.title': 'Гарантована Якість',
        'intro.feat.quality.desc': 'Сертифіковані постачальники України та Європи',
        'intro.feat.regions.title': '4 Регіони',
        'intro.feat.regions.desc': 'Львів, Тернопіль, Стрий, Луцьк',
        'intro.feat.delivery.title': 'Швидка Доставка',
        'intro.feat.delivery.desc': 'Надійне та своєчасне постачання товарів',
        'intro.feat.personal.title': 'Особистий Підхід',
        'intro.feat.personal.desc': 'Індивідуальні умови для кожного клієнта',

        // INDEX — CATEGORIES
        'cats.badge': 'Наша Продукція',
        'cats.h2': 'Категорії Товарів',
        'cats.subtitle': 'Широкий асортимент якісних продуктів харчування від перевірених виробників',
        'cats.meat.badge': "М'ясна продукція",
        'cats.meat.h3': 'Ковбаси & Делікатеси',
        'cats.meat.desc': "Смачна ковбасна продукція від брендів «Забіяка» та «Глобинський м'ясокомбінат». Традиційні рецептури, сучасне виробництво.",
        'cats.meat.link': 'Детальніше →',
        'cats.cheese.badge': 'Молочна',
        'cats.cheese.h3': 'Сири',
        'cats.cheese.desc': '«Звени Гора», «Milker», «Polianska Syrovarna», «Molendam», «Dziugas» та інші.',
        'cats.cheese.link': 'Детальніше →',
        'cats.dairy.badge': 'Молоко',
        'cats.dairy.h3': 'Молочна продукція',
        'cats.dairy.desc': '«Горянка», «Дари Карпат», «Українське», «Гощаночка» та інші.',
        'cats.dairy.link': 'Детальніше →',
        'cats.fish.badge': 'Рибна продукція',
        'cats.fish.h3': 'Риба & Морепродукти',
        'cats.fish.desc': '«Рибна Фішка», «Русалоча», «ROYAL TIGER», «Шаланда» та інші.',
        'cats.fish.link': 'Детальніше →',
        'cats.other.badge': 'Різне',
        'cats.other.h3': 'Інша Продукція',
        'cats.other.desc': '«Fishki food», «Харківські Дріжджі», «Золота миля», «Vit-Fit» та інші товари для вашого асортименту.',
        'cats.other.btn': 'Весь каталог →',
        'cats.other.link': 'Весь каталог →',

        // INDEX — CAROUSEL
        'carousel.badge': 'Продукція партнерів',
        'carousel.h2': 'Від Наших Постачальників',
        'carousel.btn': 'Всі бренди →',
        'carousel.card1.title': "М'ясо-ковбасна продукція",
        'carousel.card1.desc': "Крафтові ковбаси та делікатеси з відбірного м'яса за традиційними рецептурами.",
        'carousel.card2.title': 'Масло вершкове 82.5%',
        'carousel.card2.desc': 'Натуральне вершкове масло вищого ґатунку від Канівського маслозаводу.',
        'carousel.card3.title': 'Артизанські сири',
        'carousel.card3.desc': 'Крафтові сири ручної роботи із найкращого карпатського молока.',
        'carousel.card4.title': 'Копчена та солона риба',
        'carousel.card4.desc': 'Широкий асортимент рибної продукції для роздрібної та оптової торгівлі.',
        'carousel.card5.title': 'Молочна продукція',
        'carousel.card5.desc': 'Свіже молоко, сметана, кефір та масло з карпатських пасовищ.',

        // INDEX — CTA
        'cta.badge': "📞 Зв'яжіться З Нами",
        'cta.h2': 'Замовити Продукцію',
        'cta.p': 'Телефонуйте або пишіть нам у месенджери. Ми знайдемо найкраще рішення для вашого бізнесу.',
        'cta.email': 'td.horyanka@gmail.com',

        // ABOUT PAGE
        'about.hero.badge': 'Наша Історія',
        'about.hero.h1.1': 'Про',
        'about.hero.h1.2': 'Нас',
        'about.hero.sub': 'Ваша довіра — наша якість. Понад 10 років на ринку дистрибуції харчових продуктів.',
        'about.story.badge': '📖 Наша Історія',
        'about.story.h2': 'Заснована у Серці Галичини',
        'about.story.p1': 'Торговий Дім «Горянка» — це команда однодумців, яка у 2014 році у мальовничому Львові заснувала компанію з простою місією: забезпечити жителів заходу України якісними, натуральними харчовими продуктами від кращих виробників.',
        'about.story.p2': 'Сьогодні Горянка є надійним партнером для тисяч торгових точок Львівської, Тернопільської та Волинської областей. Ми постійно розширюємо асортимент і географію постачань.',
        'about.stat.year': 'Рік заснування',
        'about.stat.regions': 'Області охоплення',
        'about.stat.brands': 'Брендів-партнерів',
        'about.stat.offices': 'Офіси в містах',
        'about.values.badge': 'Наші принципи',
        'about.values.h2': 'Цінності компанії',
        'about.values.quality.h3': 'Якість',
        'about.values.quality.p': 'Ми працюємо лише з перевіреними виробниками, які гарантують найвищий рівень якості своєї продукції.',
        'about.values.reliability.h3': 'Надійність',
        "about.values.reliability.p": "Своєчасне постачання та виконання зобов'язань — це основа нашого бізнесу та тривалих партнерських відносин.",
        'about.values.partnership.h3': 'Партнерство',
        'about.values.partnership.p': 'Ми будуємо довготривалі відносини, засновані на взаємній повазі та вигоді для всіх сторін.',
        'about.values.growth.h3': 'Розвиток',
        'about.values.growth.p': 'Ми постійно зростаємо, розширюємо асортимент і географію, впроваджуємо нові рішення.',
        'about.geo.badge': '📍 Географія',
        'about.geo.h2': 'Де Ми Працюємо',
        'about.geo.sub': 'Наші послуги охоплюють Львівську, Тернопільську та Волинську області',
        'about.geo.lviv.label': 'Головний офіс',

        // BRANDS PAGE
        'brands.hero.badge': 'Наші партнери',
        'brands.hero.h1.1': 'Бренди',
        'brands.hero.h1.2': 'Партнери',
        'brands.hero.sub': 'Бренди, з якими ми працюємо — перевірені виробники з України та Європи',
        'brands.cat.meat': "М'ясна Продукція",
        'brands.cat.cheese': 'Сири',
        'brands.cat.dairy': 'Молочна Продукція',
        'brands.cat.fish': 'Рибна Продукція',
        'brands.cat.other': 'Інша Продукція',
        'brands.cta.h2': 'Зацікавила Продукція?',
        'brands.cta.p': "Зв'яжіться з нами для обговорення умов співпраці та уточнення наявності товарів.",

        // PRODUCTS PAGE
        'products.hero.badge': 'Каталог продукції',
        'products.hero.h1.1': 'Наша',
        'products.hero.h1.2': 'Продукція',
        'products.hero.sub': 'Якісні продукти від провідних українських та європейських виробників для вашого бізнесу',
        'products.cat01.label': 'Категорія 01',
        'products.cat01.h2': "М'ясна Продукція",
        'products.cat01.p': "Смачна і якісна м'ясна продукція від відомих виробників. Ковбаси, сосиски, сардельки, шинки та інші делікатеси за традиційними та сучасними рецептурами.",
        'products.cat01.li1': 'Ковбаса варена, копчена, напівкопчена',
        'products.cat01.li2': 'Сосиски та сардельки різних видів',
        'products.cat01.li3': "Шинки, балики, м'ясні делікатеси",
        'products.cat01.li4': "Паштети та м'ясні консерви",
        'products.cat02.label': 'Категорія 02',
        'products.cat02.h2': 'Сири',
        'products.cat02.p': "Великий вибір сирів — від традиційних українських до вишуканих європейських. Тверді, напівтверді, м'які та плавлені сири.",
        'products.cat02.li1': 'Тверді і напівтверді сири',
        'products.cat02.li2': "М'які та розсільні сири",
        'products.cat02.li3': 'Імпортні та артизанські сири',
        'products.cat02.li4': 'Плавлені та копчені сири',
        'products.cat03.label': 'Категорія 03',
        'products.cat03.h2': 'Молочна Продукція',
        'products.cat03.p': 'Свіжа та якісна молочна продукція. Молоко, кефір, ряжанка, сметана, йогурти, масло, сир кисломолочний.',
        'products.cat03.li1': 'Молоко, кефір, ряжанка, йогурти',
        'products.cat03.li2': 'Вершкове масло та маргарин',
        'products.cat03.li3': 'Сметана, вершки',
        'products.cat03.li4': 'Сир кисломолочний, сирні вироби',
        'products.cat04.label': 'Категорія 04',
        'products.cat04.h2': 'Рибна Продукція',
        'products.cat04.p': 'Широкий асортимент рибної продукції — свіжозморожена, копчена, солена та маринована риба від надійних виробників.',
        'products.cat04.li1': 'Свіжозаморожена риба та морепродукти',
        'products.cat04.li2': 'Копчена риба (гарячого і холодного копчення)',
        'products.cat04.li3': 'Солена та маринована риба',
        'products.cat04.li4': 'Рибні консерви та пресерви',
        'products.cat05.label': 'Категорія 05',
        'products.cat05.h2': 'Інша Продукція',
        'products.cat05.p': 'Широкий асортимент додаткових харчових продуктів: дріжджі, соуси, снеки та інші товари від перевірених виробників.',
        'products.cta.h2': 'Замовити Продукцію',
        'products.cta.p': 'Телефонуйте або пишіть нам. Ми підберемо найкращі умови для вашого бізнесу.',
        'products.cta.btn': 'Замовити по телефону',

        // CONTACTS PAGE
        'contacts.hero.badge': 'Зв\'яжіться з нами',
        'contacts.hero.h1.1': 'Контакти',
        'contacts.hero.sub': 'Ми завжди готові відповісти на ваші запитання та допомогти з вибором продукції.',
        'contacts.cta.label': 'Телефонуйте зараз',
        'contacts.cta.p': "Ми на зв'язку в робочі дні з 8:00 до 18:00. Щосуботи з 9:00 до 14:00",
        'contacts.city.lviv': 'Львів',
        'contacts.city.ternopil': 'Тернопіль',
        'contacts.city.stryi': 'Стрий',
        'contacts.city.lutsk': 'Луцьк',
        'contacts.role.main': 'Головний офіс',
        'contacts.role.regional': 'Регіональний офіс',
        'contacts.label.address': 'Адреса',
        'contacts.maps.link': 'Відкрити на картах →',

        // ABOUT — missing
        'about.story.p2': 'Сьогодні Горянка є надійним партнером для тисяч торгових точок Львівської, Тернопільської та Волинської областей. Ми постійно розширюємо асортимент і географію постачань.',

        // BRAND CATEGORY LABELS
        'brand.cat.meat': "М'ясна продукція",
        'brand.cat.artisan_cheese': 'Артизанські сири',
        'brand.cat.dairy_cheese': 'Молочні сири',
        'brand.cat.cheese_pgi': 'Литовський сир — PGI',
        'brand.cat.dutch_cheese': 'Голландські сири',
        'brand.cat.ukr_cheese': 'Українські сири',
        'brand.cat.italian_cheese': 'Італійський сир',
        'brand.cat.processed_cheese': 'Плавлені сири',
        'brand.cat.craft_cheese': 'Крафтові сири',
        'brand.cat.own_brand': 'Власна торгова марка',
        'brand.cat.carpathian_dairy': 'Карпатська молочна',
        'brand.cat.butter': 'Масло вершкове',
        'brand.cat.polish_dairy': 'Польська молочна',
        'brand.cat.dairy_products': 'Молочна продукція',
        'brand.cat.fish_products': 'Рибна продукція',
        'brand.cat.asian': 'Азійська кухня',
        'brand.cat.smoked_fish': 'Копчена риба',
        'brand.cat.salted_fish': 'Солона риба',
        'brand.cat.seafood': 'Морепродукти',

        // BRAND DESCRIPTIONS — М'ЯСНА
        'brand.zabiyaka.desc': "Понад 30 років — надійний виробник м'ясних виробів з Волині. Крафтові ковбаси, сосиски, напівкопчені делікатеси та балики. Три торгові марки: класична «Забіяка», дитяча «Забіячки» та преміальна «Забіяка&Забіяка Фамільна майстерня».",
        'brand.derhachiv.desc': "Харківський м'ясопереробний комбінат з багаторічними традиціями виробництва ковбасної продукції. Повний комплекс переробки м'яса від сировини до готового продукту з дотриманням сучасних стандартів якості та харчової безпеки.",
        'brand.myasnaist.desc': 'Вони роблять для нас сирокопчені ковбаси, кабаноси, нарізки.',
        'brand.hlobyne.desc': "Глобинський м'ясокомбінат — один з найвідоміших українських виробників м'ясної продукції. Понад 200 найменувань: варені та сирокопчені ковбаси, шинки, делікатеси, напівфабрикати. Натуральний склад без сої. Представлена в Сільпо, Metro, Fozzy.",
        'brand.smachni.desc': 'Асортимент ковбасних виробів: варені ковбаси, сосиски, паштети та напівкопчені делікатеси. Доступна ціна при якісному складі інгредієнтів.',

        // BRAND DESCRIPTIONS — СИРИ
        'brand.zvenyhora.desc': "80 років поспіль майстри ТМ «Звени Гора» роблять свою справу з повагою до традицій та відкритістю до нового. Артизанські сири ручної роботи з карпатського молока: тверді, напівтверді та м'які сорти.",
        'brand.milker.desc': 'Богодухівський молочний завод — виробник натуральних молочних продуктів. Широка лінійка твердих та плавлених сирів різних видів, а також вершкового масла і сиркових виробів.',
        'brand.dziugas.desc': 'Легендарний литовський твердий сир із захищеним географічним зазначенням (PGI). Виробляється з 1924 р. компанією Žemaitijos Pienas. Понад 90 міжнародних нагород. Визрівання від 12 до 120 місяців. Без лактози, багатий на кальцій та білок.',
        'brand.molendam.desc': "Бренд Ukrproduct Group, виготовлений за оригінальними голландськими рецептурами. Плавлені сири, тверді сорти та вершкове масло. Слоган: «Кусай, про втому забувай!»",
        'brand.spravzh.desc': 'Бренд натуральних українських сирів без консервантів та штучних добавок. Виготовляється виключно з натурального незбираного молока за перевіреними технологіями виробництва.',
        'brand.cucina.desc': 'Вершки кулінарні.',
        'brand.cremio.desc': "Плавлені та вершкові сири ТМ Cremio. М'яка текстура та ніжний смак. Ідеально підходять для бутербродів, закусок та гарячих страв.",
        'brand.monash.desc': 'Артизанські сири, виготовлені за монастирськими рецептурами. Тверді та напівтверді сорти з витримкою, натуральний склад, без консервантів.',

        // BRAND DESCRIPTIONS — МОЛОЧНА
        'brand.horianka_dairy.desc': "Власна торгова марка Торгового Дому. Молочна продукція під брендом «Горянка» — молоко, сметана, кефір, масло від перевірених виробників заходу України.",
        'brand.dary.desc': 'Натуральна молочна продукція з карпатських пасовищ. Екологічно чиста продукція без консервантів, з мінімальним технологічним обробленням.',
        'brand.kaniv.desc': 'Вершкове масло вищого ґатунку від Канівського маслозаводу. Класичні рецептури, природній смак та аромат. Масло 82.5% жирності.',
        'brand.polmlek.desc': 'Польський виробник молочної продукції з 30-річним досвідом. UHT молоко, вершки, кефір, йогурти. Продукція відповідає стандартам ЄС та постачається до 50+ країн.',
        'brand.mlekovita.desc': 'Найбільший польський виробник молочної продукції. Масло вершкове, тверді сири, йогурти, сметана. Понад 300 продуктів у лінійці, присутні у 120+ країнах.',
        'brand.hoshchanochka.desc': "Рівненський молокозавод «Гоща» — виробник натуральної молочної продукції: кефір, ряжанка, молоко, сметана та масло. Традиції якісного молоковиробництва Рівненщини.",
        'brand.molochvizyt.desc': 'Широкий асортимент молочної продукції: молоко, кефір, сметана, йогурти та вершки. Натуральний склад та доступна ціна для щоденного вживання.',

        // BRAND DESCRIPTIONS — РИБНА
        'brand.rybnafishka.desc': 'Слабосолена риба.',
        'brand.royaltiger.desc': 'Листя норі і рис, соуси.',
        'brand.rusalocha.desc': 'Рибна паста та оселедець за традиційними рецептурами від ТМ Русалоча. Широкий асортимент рибних паст та пресервів, оселедець різних засолів та маринадів.',
        'brand.flagman.desc': 'Оселедець, скумбрія та пресерви торгової марки Flagman. Класичний засіл та маринади за традиційними рецептурами. Широко представлена в торгових мережах України.',
        'brand.spetspossol.desc': 'Виробник солоної та маринованої риби: оселедець, скумбрія, горбуша. Особливі рецептури засолу зберігають природний смак та аромат риби.',
        'brand.shalanda.desc': 'Асортимент рибних консервів та пресервів ТМ Шаланда. Сардина, тунець, скумбрія та крабові палочки. Правильна обробка та якісна упаковка.',
        'brand.teplimorya.desc': 'Джерки, снеки до пива і лососева соломка, рибні палички.',

        // BRAND DESCRIPTIONS — ІНША
        'brand.kharkivdrizhdzi.desc': 'Компанія БАЛЕКС — правонаступник Харківського дріжджового заводу. Хлібопекарські дріжджі вищої якості для промислового та домашнього використання.',
        'brand.fishkifood.desc': 'Заморожена випічка та кондитерські вироби від українського бренду. Широкий асортимент готових заморожених страв для швидкого приготування.',

        'brand.zabiyaka.cat': "М'ясна компанія",
        'brand.zabiyaka.desc': "Крафтові ковбаси та делікатеси з відбірного м'яса за традиційними рецептурами. Широкий асортимент варених, копчених та напівкопчених ковбас та сосисок.",
        'brand.monashynski.cat': 'Сири',
        'brand.monashynski.desc': 'Монашинські Сири роблять для нас косичку, соломку, паличку фасовану і на вагу.',
        'brand.zolotamylya.cat': 'Продукти широкого вжитку',
        'brand.zolotamylia.desc': 'Відома українська торгова марка продуктів широкого вжитку. Виробляється на потужностях компанії Балекс, до якої входять Харківські Дріжджі та інші бренди.',
        'brand.vitfit.desc': 'Продукти для здорового харчування та активного способу життя. Функціональні харчові добавки та продукти зі збалансованим складом.',
        'brand.ovostar.desc': 'Провідний виробник яєць в Україні. Курячі яйця вищої категорії від власних ферм. Продукція відповідає міжнародним стандартам якості та безпеки.',
        'brand.otselavash.desc': "Вірменський лаваш та хлібобулочні вироби. Тонкий лаваш до м'ясних страв та шаурми. Виготовлено без консервантів, тривале зберігання.",
        'brand.onur.desc': 'Айран.',
        'brand.sladosvit.desc': 'Згущене молоко, іриска, сухе молоко.',
    },

    en: {
        // NAV
        'nav.home': 'Home',
        'nav.products': 'Our Products',
        'nav.brands': 'Brand Partners',
        'nav.about': 'About Us',
        'nav.contacts': 'Contacts',
        'nav.cta': 'Contact Us',
        'nav.cta.phone': '+38 067 777 14 93',

        // FOOTER
        'footer.nav.title': 'Navigation',
        'footer.contacts.title': 'Contacts',
        'footer.addresses.title': 'Our Locations',
        'footer.phone.label': 'Phone',
        'footer.email.label': 'Email',
        'footer.hours.label': 'Working Hours',
        'footer.hours.weekdays': 'Mon–Fri: 08:00 – 18:00',
        'footer.hours.saturday': 'Sat: 09:00 – 14:00',
        'footer.address.lviv': 'Lviv',
        'footer.address.lviv.street': '50/52 Promyslova St.',
        'footer.address.ternopil': 'Ternopil',
        'footer.address.ternopil.street': '14 Poliska St.',
        'footer.address.stryi': 'Stryi',
        'footer.address.stryi.street': '4 Kryva St.',
        'footer.address.lutsk': 'Lutsk',
        'footer.address.lutsk.street': '44 I. Franka St.',
        'footer.copyright': '© 2024 «Horianka» Trading House. All rights reserved.',
        'footer.address.bottom': 'Lviv, 50/52 Promyslova St.',
        'footer.link.home': 'Home',
        'footer.link.products': 'Products',
        'footer.link.brands': 'Brands',
        'footer.link.contacts': 'Contacts',
        'footer.partner': 'A reliable partner committed to quality and meeting your food business needs.',

        // INDEX — HERO
        'hero.badge': 'Founded in Lviv, 2014',
        'hero.h1.line1': 'Ukrainian',
        'hero.h1.line2': 'Traditions',
        'hero.h1.line3': 'Modern Quality',
        'hero.subtitle': 'Leading distributor of meat, dairy and fish products in western Ukraine. Trusted manufacturers, highest quality standards.',
        'hero.btn.catalog': 'Browse Catalog',
        'hero.btn.contact': 'Contact Us',
        'hero.stat.years': 'Years of experience',
        'hero.stat.brands': 'Brand partners',
        'hero.stat.cities': 'Cities present',

        // INDEX — INTRO
        'intro.badge': 'Our Mission',
        'intro.h2': 'A Reliable Partner<br />for Your Business',
        'intro.p1': 'Founded in 2014 in the picturesque city of Lviv, «Horianka» is a leading player in food distribution across western Ukraine.',
        'intro.p2': 'We specialise in supplying quality meat, dairy and other food products. Our partners are trusted Ukrainian and European producers who guarantee the highest quality.',
        'intro.btn': 'Learn More',
        'intro.feat.quality.title': 'Guaranteed Quality',
        'intro.feat.quality.desc': 'Certified suppliers from Ukraine and Europe',
        'intro.feat.regions.title': '4 Regions',
        'intro.feat.regions.desc': 'Lviv, Ternopil, Stryi, Lutsk',
        'intro.feat.delivery.title': 'Fast Delivery',
        'intro.feat.delivery.desc': 'Reliable and timely product delivery',
        'intro.feat.personal.title': 'Personal Approach',
        'intro.feat.personal.desc': 'Individual terms for each client',

        // INDEX — CATEGORIES
        'cats.badge': 'Our Products',
        'cats.h2': 'Product Categories',
        'cats.subtitle': 'Wide range of quality food products from trusted manufacturers',
        'cats.meat.badge': 'Meat products',
        'cats.meat.h3': 'Sausages & Delicacies',
        'cats.meat.desc': 'Tasty sausage products from «Zabiyaka» and «Hlobinskyi Meat Plant». Traditional recipes, modern production.',
        'cats.meat.link': 'Explore →',
        'cats.cheese.badge': 'Dairy',
        'cats.cheese.h3': 'Cheeses',
        'cats.cheese.desc': '«Zveny Hora», «Milker», «Polianska Syrovarna», «Molendam», «Dziugas» and more.',
        'cats.cheese.link': 'Explore →',
        'cats.dairy.badge': 'Milk',
        'cats.dairy.h3': 'Dairy Products',
        'cats.dairy.desc': '«Horianka», «Dary Karpat», «Ukrainske», «Hoshchanochka» and more.',
        'cats.dairy.link': 'Explore →',
        'cats.fish.badge': 'Fish products',
        'cats.fish.h3': 'Fish & Seafood',
        'cats.fish.desc': '«Rybna Fishka», «Rusalocha», «ROYAL TIGER», «Shalanda» and more.',
        'cats.fish.link': 'Explore →',
        'cats.other.badge': 'Other',
        'cats.other.h3': 'Other Products',
        'cats.other.desc': '«Fishki food», «Kharkiv Yeast», «Zolota Mylia», «Vit-Fit» and other items for your assortment.',
        'cats.other.btn': 'Full catalog →',
        'cats.other.link': 'Full catalog →',

        // INDEX — CAROUSEL
        'carousel.badge': 'Partner products',
        'carousel.h2': 'From Our Suppliers',
        'carousel.btn': 'All brands →',
        'carousel.card1.title': 'Meat & Sausage Products',
        'carousel.card1.desc': 'Craft sausages and delicacies made from select meat using traditional recipes.',
        'carousel.card2.title': 'Butter 82.5%',
        'carousel.card2.desc': 'Premium quality natural butter from the Kaniv butter plant.',
        'carousel.card3.title': 'Artisan Cheeses',
        'carousel.card3.desc': 'Handcrafted artisan cheeses from the finest Carpathian milk.',
        'carousel.card4.title': 'Smoked & Salted Fish',
        'carousel.card4.desc': 'Wide range of fish products for retail and wholesale trade.',
        'carousel.card5.title': 'Dairy Products',
        'carousel.card5.desc': 'Fresh milk, sour cream, kefir and butter from Carpathian pastures.',

        // INDEX — CTA
        'cta.badge': '📞 Get In Touch',
        'cta.h2': 'Order Products',
        'cta.p': 'Call or message us in messengers. We will find the best solution for your business.',
        'cta.email': 'td.horyanka@gmail.com',

        // ABOUT PAGE
        'about.hero.badge': 'Our History',
        'about.hero.h1.1': 'About',
        'about.hero.h1.2': 'Us',
        'about.hero.sub': 'Your trust — our quality. Over 10 years in food distribution.',
        'about.story.badge': '📖 Our Story',
        'about.story.h2': 'Founded in the Heart of Galicia',
        'about.story.p1': '«Horianka» Trading House is a team of like-minded people who in 2014, in the picturesque city of Lviv, founded a company with a simple mission: to supply western Ukraine residents with quality, natural food products from the best manufacturers.',
        'about.story.p2': 'Today Horianka is a trusted partner for thousands of retail points across Lviv, Ternopil and Volyn regions. We continuously expand our range and delivery geography.',
        'about.stat.year': 'Founded',
        'about.stat.regions': 'Regions covered',
        'about.stat.brands': 'Brand partners',
        'about.stat.offices': 'City offices',
        'about.values.badge': 'Our principles',
        'about.values.h2': 'Company Values',
        'about.values.quality.h3': 'Quality',
        'about.values.quality.p': 'We work only with trusted producers who guarantee the highest quality of their products.',
        'about.values.reliability.h3': 'Reliability',
        'about.values.reliability.p': 'On-time delivery and meeting commitments are the foundation of our business and long-term partnerships.',
        'about.values.partnership.h3': 'Partnership',
        'about.values.partnership.p': 'We build long-term relationships based on mutual respect and benefit for all parties.',
        'about.values.growth.h3': 'Growth',
        'about.values.growth.p': 'We constantly grow, expand our range and geography, and implement new solutions.',
        'about.geo.badge': '📍 Geography',
        'about.geo.h2': 'Where We Operate',
        'about.geo.sub': 'Our services cover Lviv, Ternopil and Volyn regions',
        'about.geo.lviv.label': 'Head Office',

        // BRANDS PAGE
        'brands.hero.badge': 'Our partners',
        'brands.hero.h1.1': 'Brand',
        'brands.hero.h1.2': 'Partners',
        'brands.hero.sub': 'Brands we work with — verified manufacturers from Ukraine and Europe',
        'brands.cat.meat': 'Meat Products',
        'brands.cat.cheese': 'Cheeses',
        'brands.cat.dairy': 'Dairy Products',
        'brands.cat.fish': 'Fish Products',
        'brands.cat.other': 'Other Products',
        'brands.cta.h2': 'Interested in Products?',
        'brands.cta.p': 'Contact us to discuss cooperation terms and check product availability.',

        // PRODUCTS PAGE
        'products.hero.badge': 'Product Catalog',
        'products.hero.h1.1': 'Our',
        'products.hero.h1.2': 'Products',
        'products.hero.sub': 'Quality products from leading Ukrainian and European manufacturers for your business',
        'products.cat01.label': 'Category 01',
        'products.cat01.h2': 'Meat Products',
        'products.cat01.p': 'Tasty and quality meat products from well-known producers. Sausages, frankfurters, sardelky, hams and other delicacies made to traditional and modern recipes.',
        'products.cat01.li1': 'Cooked, smoked and semi-smoked sausage',
        'products.cat01.li2': 'Frankfurters and sardelky of various types',
        'products.cat01.li3': 'Hams, balyk and meat delicacies',
        'products.cat01.li4': 'Meat pâtés and canned meat',
        'products.cat02.label': 'Category 02',
        'products.cat02.h2': 'Cheeses',
        'products.cat02.p': 'Wide selection of cheeses — from traditional Ukrainian to refined European. Hard, semi-hard, soft and processed cheeses from leading producers.',
        'products.cat02.li1': 'Hard and semi-hard cheeses',
        'products.cat02.li2': 'Soft and brined cheeses',
        'products.cat02.li3': 'Imported and artisan cheeses',
        'products.cat02.li4': 'Processed and smoked cheeses',
        'products.cat03.label': 'Category 03',
        'products.cat03.h2': 'Dairy Products',
        'products.cat03.p': 'Fresh and quality dairy products. Milk, kefir, ryazhenka, sour cream, yogurts, butter, cottage cheese from leading Ukrainian producers.',
        'products.cat03.li1': 'Milk, kefir, ryazhenka, yogurts',
        'products.cat03.li2': 'Butter and margarine',
        'products.cat03.li3': 'Sour cream, cream',
        'products.cat03.li4': 'Cottage cheese, curd products',
        'products.cat04.label': 'Category 04',
        'products.cat04.h2': 'Fish Products',
        'products.cat04.p': 'Wide range of fish products — fresh-frozen, smoked, salted and marinated fish from reliable producers.',
        'products.cat04.li1': 'Fresh-frozen fish and seafood',
        'products.cat04.li2': 'Smoked fish (hot and cold smoked)',
        'products.cat04.li3': 'Salted and marinated fish',
        'products.cat04.li4': 'Canned fish and preserves',
        'products.cat05.label': 'Category 05',
        'products.cat05.h2': 'Other Products',
        'products.cat05.p': 'Wide range of additional food products: yeast, sauces, snacks and other goods from trusted producers.',
        'products.cta.h2': 'Order Products',
        'products.cta.p': 'Call or message us. We will find the best terms for your business.',
        'products.cta.btn': 'Order by phone',

        // CONTACTS PAGE
        'contacts.hero.badge': 'Get in touch',
        'contacts.hero.h1.1': 'Contacts',
        'contacts.hero.sub': 'We are always ready to answer your questions and help you choose products.',
        'contacts.cta.label': 'Call us now',
        'contacts.cta.p': 'We are available on weekdays from 8:00 to 18:00. Saturday 9:00 to 14:00',
        'contacts.city.lviv': 'Lviv',
        'contacts.city.ternopil': 'Ternopil',
        'contacts.city.stryi': 'Stryi',
        'contacts.city.lutsk': 'Lutsk',
        'contacts.role.main': 'Head office',
        'contacts.role.regional': 'Regional office',
        'contacts.label.address': 'Address',
        'contacts.maps.link': 'Open in maps →',

        // ABOUT — missing
        'about.story.p2': 'Today Horianka is a trusted partner for thousands of retail points across Lviv, Ternopil and Volyn regions. We continuously expand our range and delivery geography.',

        // BRAND CATEGORY LABELS
        'brand.cat.meat': 'Meat Products',
        'brand.cat.artisan_cheese': 'Artisan Cheeses',
        'brand.cat.dairy_cheese': 'Dairy Cheeses',
        'brand.cat.cheese_pgi': 'Lithuanian Cheese — PGI',
        'brand.cat.dutch_cheese': 'Dutch Cheeses',
        'brand.cat.ukr_cheese': 'Ukrainian Cheeses',
        'brand.cat.italian_cheese': 'Italian Cheese',
        'brand.cat.processed_cheese': 'Processed Cheeses',
        'brand.cat.craft_cheese': 'Craft Cheeses',
        'brand.cat.own_brand': 'Own Brand',
        'brand.cat.carpathian_dairy': 'Carpathian Dairy',
        'brand.cat.butter': 'Butter',
        'brand.cat.polish_dairy': 'Polish Dairy',
        'brand.cat.dairy_products': 'Dairy Products',
        'brand.cat.fish_products': 'Fish Products',
        'brand.cat.asian': 'Asian Cuisine',
        'brand.cat.smoked_fish': 'Smoked Fish',
        'brand.cat.salted_fish': 'Salted Fish',
        'brand.cat.seafood': 'Seafood',

        // BRAND DESCRIPTIONS — MEAT
        'brand.zabiyaka.desc': "Over 30 years of trusted meat product manufacturing from Volyn region. Craft sausages, frankfurters, semi-smoked delicacies and balyk. Three trademarks: classic «Zabiyaka», kids' brand «Zabiyachky» and premium «Zabiyaka&Zabiyaka Family Workshop».",
        'brand.derhachiv.desc': 'Kharkiv meat processing plant with decades of sausage production tradition. Full-cycle meat processing from raw material to finished product, meeting modern quality and food safety standards.',
        'brand.myasnaist.desc': 'They make for us raw smoked sausages, kabanosy, cold cuts.',
        'brand.hlobyne.desc': 'Hlobyne Meat Plant is one of the most well-known Ukrainian meat producers. Over 200 SKUs: cooked and dry-cured sausages, hams, delicacies, semi-processed products. Natural ingredients, no soy. Available at Silpo, Metro, Fozzy.',
        'brand.smachni.desc': 'Range of sausage products: cooked sausages, frankfurters, pâtés and semi-smoked delicacies. Affordable pricing with quality ingredients.',

        // BRAND DESCRIPTIONS — CHEESES
        'brand.zvenyhora.desc': "For 80 consecutive years, TM «Zveny Hora» craftspeople have worked with respect for tradition and openness to innovation. Artisan hand-crafted cheeses from Carpathian milk: hard, semi-hard and soft varieties.",
        'brand.milker.desc': 'Bohodukhiv Dairy Plant — producer of natural dairy products. Wide range of hard and processed cheeses, butter and curd products.',
        'brand.dziugas.desc': 'Legendary Lithuanian hard cheese with Protected Geographical Indication (PGI). Produced since 1924 by Žemaitijos Pienas. Over 90 international awards. Aged from 12 to 120 months. Lactose-free, rich in calcium and protein.',
        'brand.molendam.desc': "Ukrproduct Group brand made to original Dutch recipes. Processed cheeses, hard varieties and butter. Brand tagline: «Bite it, forget your fatigue!»",
        'brand.spravzh.desc': 'Brand of natural Ukrainian cheeses without preservatives or artificial additives. Made exclusively from natural whole milk using proven production technologies.',
        'brand.cucina.desc': 'Culinary cream.',
        'brand.cremio.desc': 'Processed and cream cheeses by TM Cremio. Soft texture and delicate taste. Perfect for sandwiches, snacks and hot dishes.',
        'brand.monash.desc': 'Artisan cheeses made to monastic recipes. Hard and semi-hard aged varieties, natural ingredients, no preservatives.',

        // BRAND DESCRIPTIONS — DAIRY
        'brand.horianka_dairy.desc': "Own brand of the Trading House. Dairy products under the «Horianka» brand — milk, sour cream, kefir, butter from verified producers of western Ukraine.",
        'brand.dary.desc': 'Natural dairy products from Carpathian pastures. Eco-friendly, no preservatives, minimal processing.',
        'brand.kaniv.desc': 'Premium-quality butter from the Kaniv Butter Plant. Classic recipes, natural taste and aroma. 82.5% fat content.',
        'brand.polmlek.desc': 'Polish dairy producer with 30 years of experience. UHT milk, cream, kefir, yoghurts. Products meet EU standards and are exported to 50+ countries.',
        'brand.mlekovita.desc': "Poland's largest dairy producer. Butter, hard cheeses, yoghurts, sour cream. Over 300 products, present in 120+ countries.",
        'brand.hoshchanochka.desc': "Hoscha Dairy Plant (Rivne region) — producer of natural dairy: kefir, ryazhenka, milk, sour cream and butter. Quality dairy traditions of the Rivne region.",
        'brand.molochvizyt.desc': 'Wide range of dairy products: milk, kefir, sour cream, yoghurts and cream. Natural ingredients and affordable pricing for daily consumption.',

        // BRAND DESCRIPTIONS — FISH
        'brand.rybnafishka.desc': 'Lightly salted fish.',
        'brand.royaltiger.desc': 'Nori leaves and rice, sauces.',
        'brand.rusalocha.desc': 'Fish paste and herring made to traditional recipes from TM Rusalocha. Wide range of fish pastes and preserves, herring in various marinades and brines.',
        'brand.flagman.desc': 'Herring, mackerel and preserves under the Flagman brand. Classic salting and marinades using traditional recipes. Widely available in Ukrainian retail.',
        'brand.spetspossol.desc': 'Producer of salted and marinated fish: herring, mackerel, pink salmon. Special salting recipes preserve the natural taste and aroma.',
        'brand.shalanda.desc': 'Range of canned and preserved fish by TM Shalanda. Sardine, tuna, mackerel and crab sticks. Proper processing and quality packaging.',
        'brand.teplimorya.desc': 'Jerky, beer snacks and salmon sticks, fish sticks.',

        // BRAND DESCRIPTIONS — OTHER
        'brand.kharkivdrizhdzi.desc': 'BALEX company — successor of the Kharkiv Yeast Plant. Premium baking yeast for industrial and home use.',
        'brand.fishkifood.desc': 'Frozen baked goods and confectionery from a Ukrainian brand. Wide range of ready-made frozen dishes for quick preparation.',

        'brand.zabiyaka.cat': 'Meat Company',
        'brand.zabiyaka.desc': 'Craft sausages and delicacies made from select meat to traditional recipes. Wide range of cooked, smoked and semi-smoked sausages and frankfurters.',
        'brand.monashynski.cat': 'Cheeses',
        'brand.monashynski.desc': 'Monashynski Cheeses make for us braided cheese, sticks, packaged and by weight.',
        'brand.zolotamylya.cat': 'General consumer products',
        'brand.zolotamylia.desc': 'Well-known Ukrainian consumer goods brand. Produced by the Balex company, which also includes Kharkiv Yeast and other brands.',
        'brand.vitfit.desc': 'Products for healthy eating and an active lifestyle. Functional food supplements and products with a balanced nutritional profile.',
        'brand.ovostar.desc': "Ukraine's leading egg producer. Premium-grade chicken eggs from own farms. Products meet international quality and safety standards.",
        'brand.otselavash.desc': 'Armenian lavash and bakery products. Thin lavash for meat dishes and shawarma. Made without preservatives, long shelf life.',
        'brand.onur.desc': 'Ayran.',
        'brand.sladosvit.desc': 'Condensed milk, toffee, powdered milk.',
    }
};

// ---- Language toggle logic ----

function applyLanguage(lang) {
    document.documentElement.lang = lang === 'uk' ? 'uk' : 'en';
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update lang toggle button appearance
    const btn = document.getElementById('langToggleBtn');
    if (btn) {
        btn.innerHTML = lang === 'uk'
            ? '<span class="text-sm font-semibold tracking-wide">EN</span>'
            : '<span class="text-sm font-semibold tracking-wide">UA</span>';
        btn.title = lang === 'uk' ? 'Switch to English' : 'Перейти на українську';
    }

    localStorage.setItem('goriankaLang', lang);
}

function toggleLanguage() {
    const current = localStorage.getItem('goriankaLang') || 'uk';
    applyLanguage(current === 'uk' ? 'en' : 'uk');
}

// Auto-restore on page load
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('goriankaLang') || 'uk';
    // Only apply if EN (UK is already the default HTML content)
    if (saved === 'en') {
        applyLanguage('en');
    } else {
        // Still update button label to show "EN" option
        const btn = document.getElementById('langToggleBtn');
        if (btn) {
            btn.innerHTML = '<span class="text-sm font-semibold tracking-wide">EN</span>';
            btn.title = 'Switch to English';
        }
    }
});
