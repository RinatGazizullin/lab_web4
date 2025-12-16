package utils;

import lombok.Getter;

@Getter
public enum TimeZone {
    LOS_ANGELES("LAX", "Лос-Анджелес", -8, "America/Los_Angeles"),
    VANCOUVER("YVR", "Ванкувер", -8, "America/Vancouver"),
    SEATTLE("SEA", "Сиэтл", -8, "America/Los_Angeles"),

    DENVER("DEN", "Денвер", -7, "America/Denver"),
    PHOENIX("PHX", "Финикс", -7, "America/Phoenix"),
    CALGARY("YYC", "Калгари", -7, "America/Edmonton"),

    CHICAGO("ORD", "Чикаго", -6, "America/Chicago"),
    MEXICO_CITY("MEX", "Мехико", -6, "America/Mexico_City"),
    DALLAS("DFW", "Даллас", -6, "America/Chicago"),

    NEW_YORK("JFK", "Нью-Йорк", -5, "America/New_York"),
    TORONTO("YYZ", "Торонто", -5, "America/Toronto"),
    MIAMI("MIA", "Майами", -5, "America/New_York"),
    BOGOTA("BOG", "Богота", -5, "America/Bogota"),

    CARACAS("CCS", "Каракас", -4, "America/Caracas"),
    SANTIAGO("SCL", "Сантьяго", -4, "America/Santiago"),
    LA_PAZ("LPB", "Ла-Пас", -4, "America/La_Paz"),

    BUENOS_AIRES("EZE", "Буэнос-Айрес", -3, "America/Argentina/Buenos_Aires"),
    SAO_PAULO("GRU", "Сан-Паулу", -3, "America/Sao_Paulo"),
    RIO_DE_JANEIRO("GIG", "Рио-де-Жанейро", -3, "America/Sao_Paulo"),

    LONDON("LON", "Лондон", 0, "Europe/London"),
    LISBON("LIS", "Лиссабон", 0, "Europe/Lisbon"),
    DUBLIN("DUB", "Дублин", 0, "Europe/Dublin"),
    ACCRA("ACC", "Аккра", 0, "Africa/Accra"),

    PARIS("CDG", "Париж", 1, "Europe/Paris"),
    BERLIN("BER", "Берлин", 1, "Europe/Berlin"),
    ROME("FCO", "Рим", 1, "Europe/Rome"),
    MADRID("MAD", "Мадрид", 1, "Europe/Madrid"),
    AMSTERDAM("AMS", "Амстердам", 1, "Europe/Amsterdam"),
    VIENNA("VIE", "Вена", 1, "Europe/Vienna"),
    WARSAW("WAW", "Варшава", 1, "Europe/Warsaw"),
    PRAGUE("PRG", "Прага", 1, "Europe/Prague"),
    BUDAPEST("BUD", "Будапешт", 1, "Europe/Budapest"),
    ZURICH("ZRH", "Цюрих", 1, "Europe/Zurich"),
    BRUSSELS("BRU", "Брюссель", 1, "Europe/Brussels"),
    STOCKHOLM("ARN", "Стокгольм", 1, "Europe/Stockholm"),
    OSLO("OSL", "Осло", 1, "Europe/Oslo"),
    COPENHAGEN("CPH", "Копенгаген", 1, "Europe/Copenhagen"),

    ATHENS("ATH", "Афины", 2, "Europe/Athens"),
    HELSINKI("HEL", "Хельсинки", 2, "Europe/Helsinki"),
    KYIV("KBP", "Киев", 2, "Europe/Kiev"),
    BUCHAREST("OTP", "Бухарест", 2, "Europe/Bucharest"),
    SOFIA("SOF", "София", 2, "Europe/Sofia"),
    CAIRO("CAI", "Каир", 2, "Africa/Cairo"),
    JERUSALEM("TLV", "Иерусалим", 2, "Asia/Jerusalem"),
    JOHANNESBURG("JNB", "Йоханнесбург", 2, "Africa/Johannesburg"),

    MOSCOW("SVO", "Москва", 3, "Europe/Moscow"),
    ISTANBUL("IST", "Стамбул", 3, "Europe/Istanbul"),
    RIYADH("RUH", "Эр-Рияд", 3, "Asia/Riyadh"),
    KUWAIT("KWI", "Эль-Кувейт", 3, "Asia/Kuwait"),
    DOHA("DOH", "Доха", 3, "Asia/Qatar"),
    BAGHDAD("BGW", "Багдад", 3, "Asia/Baghdad"),
    NAIROBI("NBO", "Найроби", 3, "Africa/Nairobi"),
    MINSK("MSQ", "Минск", 3, "Europe/Minsk"),

    DUBAI("DXB", "Дубай", 4, "Asia/Dubai"),
    BAKU("GYD", "Баку", 4, "Asia/Baku"),
    YEREVAN("EVN", "Ереван", 4, "Asia/Yerevan"),
    TBILISI("TBS", "Тбилиси", 4, "Asia/Tbilisi"),
    MAURITIUS("MRU", "Порт-Луи", 4, "Indian/Mauritius"),

    ISLAMABAD("ISB", "Исламабад", 5, "Asia/Karachi"),
    KARACHI("KHI", "Карачи", 5, "Asia/Karachi"),
    TASHKENT("TAS", "Ташкент", 5, "Asia/Tashkent"),
    YEKATERINBURG("SVX", "Екатеринбург", 5, "Asia/Yekaterinburg"),

    DELHI("DEL", "Дели", 5.5, "Asia/Kolkata"),
    MUMBAI("BOM", "Мумбаи", 5.5, "Asia/Kolkata"),
    KOLKATA("CCU", "Калькутта", 5.5, "Asia/Kolkata"),
    COLOMBO("CMB", "Коломбо", 5.5, "Asia/Colombo"),

    DHAKA("DAC", "Дакка", 6, "Asia/Dhaka"),
    ALMATY("ALA", "Алматы", 6, "Asia/Almaty"),
    ASTANA("NQZ", "Астана", 6, "Asia/Almaty"),

    BANGKOK("BKK", "Бангкок", 7, "Asia/Bangkok"),
    JAKARTA("CGK", "Джакарта", 7, "Asia/Jakarta"),
    HANOI("HAN", "Ханой", 7, "Asia/Bangkok"),

    BEIJING("PEK", "Пекин", 8, "Asia/Shanghai"),
    SHANGHAI("PVG", "Шанхай", 8, "Asia/Shanghai"),
    SINGAPORE("SIN", "Сингапур", 8, "Asia/Singapore"),
    HONG_KONG("HKG", "Гонконг", 8, "Asia/Hong_Kong"),
    PERTH("PER", "Перт", 8, "Australia/Perth"),
    TAIPEI("TPE", "Тайбэй", 8, "Asia/Taipei"),
    KUALA_LUMPUR("KUL", "Куала-Лумпур", 8, "Asia/Kuala_Lumpur"),

    TOKYO("NRT", "Токио", 9, "Asia/Tokyo"),
    SEOUL("ICN", "Сеул", 9, "Asia/Seoul"),
    PYONGYANG("FNJ", "Пхеньян", 9, "Asia/Pyongyang"),

    SYDNEY("SYD", "Сидней", 10, "Australia/Sydney"),
    MELBOURNE("MEL", "Мельбурн", 10, "Australia/Melbourne"),
    BRISBANE("BNE", "Брисбен", 10, "Australia/Brisbane"),
    GUAM("GUM", "Гуам", 10, "Pacific/Guam"),
    PORT_MORESBY("POM", "Порт-Морсби", 10, "Pacific/Port_Moresby"),

    VLADIVOSTOK("VVO", "Владивосток", 11, "Asia/Vladivostok"),
    MAGADAN("GDX", "Магадан", 11, "Asia/Magadan"),
    SOLOMON_ISLANDS("HIR", "Хониара", 11, "Pacific/Guadalcanal"),

    AUCKLAND("AKL", "Окленд", 12, "Pacific/Auckland"),
    WELLINGTON("WLG", "Веллингтон", 12, "Pacific/Auckland"),
    FIJI("SUV", "Сува", 12, "Pacific/Fiji"),

    HONOLULU("HNL", "Гонолулу", -10, "Pacific/Honolulu"),
    ANCHORAGE("ANC", "Анкоридж", -9, "America/Anchorage"),
    ADAK("ADK", "Адак", -10, "America/Adak"),
    TAHITI("PPT", "Папеэте", -10, "Pacific/Tahiti"),
    NOUMEA("NOU", "Нумеа", 11, "Pacific/Noumea"),

    KAMCHATKA("PKC", "Петропавловск-Камчатский", 12, "Asia/Kamchatka"),
    CHATHAM("CHT", "Чатем", 12.75, "Pacific/Chatham"),
    KIRITIMATI("CXI", "Киритимати", 14, "Pacific/Kiritimati");

    private final String label;
    private final String name;
    private final String cityName;
    private final double offsetFromGMT;
    private final String ianaId;

    TimeZone(String label, String cityName, double offsetFromGMT, String ianaId) {
        this.label = label;
        this.name = this.name();
        this.cityName = cityName;
        this.offsetFromGMT = offsetFromGMT;
        this.ianaId = ianaId;
    }

    public static boolean check(String label) {
        try {
            TimeZone.valueOf(label);
            return true;
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
}