import re
import os

html_file = r'c:\Users\march\Downloads\gorianka\brands.html'

with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

# I will recreate the brands grids.
brands_section = """            <!-- М'ЯСНА ПРОДУКЦІЯ -->
            <div class="mb-16">
                <div class="flex items-center gap-4 mb-8">
                    <h2 class="font-serif text-2xl font-bold" data-i18n="brands.cat.meat">М'ясна Продукція</h2>
                    <div class="flex-1 h-px bg-gray-200"></div>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_zabiyaka_logo_real.png" alt="Забіяка" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Забіяка</h3>
                                <div class="text-gorianka-red text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.zabiyaka.cat">М'ясна компанія</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.zabiyaka.desc">Крафтові ковбаси та делікатеси з відбірного м'яса за традиційними рецептурами. Широкий асортимент варених, копчених та напівкопчених ковбас та сосисок.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_derhachiv_logo_real.png" alt="Дергачівський м'ясокомбінат" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Дергачівський</h3>
                                <div class="text-gorianka-red text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.meat">М'ясна продукція</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.derhachiv.desc">Харківський м'ясопереробний комбінат з багаторічними традиціями виробництва ковбасної продукції. Повний комплекс переробки м'яса від сировини до готового продукту з дотриманням сучасних стандартів якості та харчової безпеки.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_myasnaist_logo.jpeg" alt="М'ясна Історія" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">М'ясна Гільдія</h3>
                                <div class="text-gorianka-red text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.meat">М'ясна продукція</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.myasnaist.desc">Широкий асортимент ковбасної продукції: варені, напівкопчені та сирокопчені ковбаси, шинки, сосиски та сардельки за перевіреними рецептурами.</p>
                    </div>
                </div>
            </div>

            <!-- СИРИ ТА МОЛОЧНА ПРОДУКЦІЯ -->
            <div class="mb-16">
                <div class="flex items-center gap-4 mb-8">
                    <h2 class="font-serif text-2xl font-bold" data-i18n="brands.cat.cheese">Сири та Молочна Продукція</h2>
                    <div class="flex-1 h-px bg-gray-200"></div>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_zvenygora_logo.webp" alt="Звени Гора" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Звени Гора</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.artisan_cheese">Артизанські сири</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.zvenyhora.desc">80 років поспіль майстри ТМ «Звени Гора» роблять свою справу з повагою до традицій та відкритістю до нового. Артизанські сири ручної роботи з карпатського молока: тверді, напівтверді та м'які сорти.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_milker_logo.svg" alt="Milker" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Milker</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.dairy_cheese">Молочні сири</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.milker.desc">Богодухівський молочний завод — виробник натуральних молочних продуктів. Широка лінійка твердих та плавлених сирів різних видів, а також вершкового масла і сиркових виробів.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_dziugas_logo.png" alt="Dziugas" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Dziugas</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.cheese_pgi">Литовський сир — PGI</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.dziugas.desc">Легендарний литовський твердий сир із захищеним географічним зазначенням (PGI). Виробляється з 1924 р. компанією Žemaitijos Pienas. Понад 90 міжнародних нагород.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_molendam_logo.webp" alt="Molendam" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Molendam</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.dutch_cheese">Голландські сири</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.molendam.desc">Бренд Ukrproduct Group, виготовлений за оригінальними голландськими рецептурами. Плавлені сири, тверді сорти та вершкове масло.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_cucina_logo.jpeg" alt="Cucina" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Cucina</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.italian_cheese">Італійський сир</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.cucina.desc">Преміальні сири у стилі італійської кухні. Рикота, маскарпоне, моцарела та твердий пармезан. Виготовлено за оригінальними рецептурами.</p>
                    </div>
                    
                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_monashynski_logo_real.jpeg" alt="Монастирський" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Монастирський</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.monashynski.cat">Сири</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.monashynski.desc">Традиційні монастирські сири з 1879 року. Унікальні рецептури, витримані тверді та напівтверді сири з натурального молока.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_goriyanka_dairy_logo.jpeg" alt="Горянка" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Горянка</h3>
                                <div class="text-sky-500 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.own_brand">Власна торгова марка</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.horianka_dairy.desc">Молочна продукція під брендом «Горянка» — молоко, сметана, кефір, масло від перевірених виробників заходу України.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_dary_logo.jpeg" alt="Дари Карпат" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Дари Карпат</h3>
                                <div class="text-sky-500 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.carpathian_dairy">Карпатська молочна</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.dary.desc">Натуральна молочна продукція з карпатських пасовищ. Екологічно чиста продукція без консервантів, з мінімальним обробленням.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_kaniv_logo_real.png" alt="Канів" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Канів</h3>
                                <div class="text-sky-500 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.butter">Масло вершкове</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.kaniv.desc">Вершкове масло вищого ґатунку від Канівського маслозаводу. Класичні рецептури, природній смак та аромат. Масло 82.5% жирності.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_polmlek_logo.png" alt="Polmlek" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Polmlek</h3>
                                <div class="text-sky-500 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.polish_dairy">Польська молочна</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.polmlek.desc">Польський виробник молочної продукції з 30-річним досвідом. UHT молоко, вершки, кефір, йогурти. Стандарти ЄС.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_mlekovita_logo.png" alt="Mlekovita" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Mlekovita</h3>
                                <div class="text-sky-500 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.polish_dairy">Польська молочна</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.mlekovita.desc">Найбільший польський виробник молочної продукції. Масло вершкове, тверді сири, йогурти, сметана.</p>
                    </div>
                    
                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_hoshchanochka_logo.jpeg" alt="Гощаночка" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Гощаночка</h3>
                                <div class="text-sky-500 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.dairy">Молоко</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.hoshchanochka.desc">Рівненський молокозавод «Гоща» — виробник натуральної молочної продукції: кефір, ряжанка, молоко, сметана та масло.</p>
                    </div>
                </div>
            </div>

            <!-- РИБНА ПРОДУКЦІЯ -->
            <div class="mb-16">
                <div class="flex items-center gap-4 mb-8">
                    <h2 class="font-serif text-2xl font-bold" data-i18n="brands.cat.fish">Рибна Продукція</h2>
                    <div class="flex-1 h-px bg-gray-200"></div>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_rybnafishka_logo_real.png" alt="Рибна Фішка" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Рибна Фішка</h3>
                                <div class="text-teal-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.salted_fish">Солона риба</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.rybnafishka.desc">Широкий асортимент рибної продукції: слабосолена форель та сьомга, різноманітні пресерви та маринована риба.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_rusalocha_logo.jpeg" alt="Русалоча" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Русалоча</h3>
                                <div class="text-teal-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.salted_fish">Солона риба</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.rusalocha.desc">Рибна паста та оселедець за традиційними рецептурами від ТМ Русалоча. Широкий асортимент рибних паст та пресервів.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_teplimorya_logo.png" alt="Теплі Моря" class="w-full h-full object-fill" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Теплі Моря</h3>
                                <div class="text-teal-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.seafood">Морепродукти</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.teplimorya.desc">Морепродукти та заморожена риба від ТМ Теплі Моря. Креветки, кальмари, мідії та асорті морепродуктів.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_royaltiger_logo.png" alt="ROYAL TIGER" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">ROYAL TIGER</h3>
                                <div class="text-teal-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.cat.asian">Азійська кухня</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.royaltiger.desc">Міжнародний бренд від Heuschen & Schrouff для приготування азійських страв. Рис жасмин та суші, рисовий папір, соуси, локшина.</p>
                    </div>
                </div>
            </div>

            <!-- ІНША ПРОДУКЦІЯ -->
            <div class="mb-8">
                <div class="flex items-center gap-4 mb-8">
                    <h2 class="font-serif text-2xl font-bold" data-i18n="brands.cat.other">Інша Продукція</h2>
                    <div class="flex-1 h-px bg-gray-200"></div>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_zolotamylya_logo_real.jpg" alt="Золота Миля" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Золота Миля</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="brand.zolotamylya.cat">Продукти широкого вжитку</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.zolotamylia.desc">Відома українська торгова марка продуктів широкого вжитку. Виробляється на потужностях компанії Балекс, до якої входять Харківські Дріжджі та інші бренди.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_kharkivdrizhdzi_logo_real.png" alt="Харківські Дріжджі" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Харківські Дріжджі</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="cats.other.badge">Різне</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.kharkivdrizhdzi.desc">Компанія БАЛЕКС — правонаступник Харківського дріжджового заводу. Хлібопекарські дріжджі вищої якості для промислового та домашнього використання.</p>
                    </div>
                    
                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_fishkifood_logo_real.png" alt="Fishki food" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Fishki food</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="cats.other.badge">Різне</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.fishkifood.desc">Заморожена випічка та кондитерські вироби від українського бренду. Широкий асортимент готових заморожених страв для швидкого приготування.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_vitfit_logo.jpeg" alt="Vit-Fit" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Vit-Fit</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="cats.other.badge">Різне</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.vitfit.desc">Продукти для здорового харчування та активного способу життя. Функціональні харчові добавки та продукти зі збалансованим складом.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_otselavash_logo.jpeg" alt="Оце Лаваш" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Оце Лаваш</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="cats.other.badge">Різне</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.otselavash.desc">Вірменський лаваш та хлібобулочні вироби. Тонкий лаваш до м'ясних страв та шаурми. Виготовлено без консервантів, тривале зберігання.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_onur_logo.jpeg" alt="Onur" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Onur</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="cats.other.badge">Різне</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.onur.desc">Турецький виробник кондитерських виробів, напоїв та снеків. Халва, тахіні, рахат-лукум, айран та турецькі солодощі.</p>
                    </div>

                    <div class="brand-card flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-28 h-16 rounded-2xl overflow-hidden flex items-center justify-center shrink-0 bg-white p-1 shadow-sm border border-gray-100">
                                <img src="images/brand_sladosvit_logo.jpeg" alt="Sladosvit" class="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 class="font-serif text-xl font-bold text-charcoal">Сладосвіт</h3>
                                <div class="text-amber-600 text-xs font-semibold mt-1 uppercase tracking-wide" data-i18n="cats.other.badge">Різне</div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-i18n="brand.sladosvit.desc">Морозиво та заморожені десерти від одного з найбільших українських виробників. Широкий асортимент від класики до преміальних сортів.</p>
                    </div>
                </div>
            </div>"""

new_html = re.sub(
    r'<!-- М\'ЯСНА ПРОДУКЦІЯ -->.*?<!-- CTA -->', 
    brands_section + '\n\n            <!-- CTA -->', 
    html, 
    flags=re.DOTALL
)

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Brands successfully rewrote.")
