import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    options: {
        "colorTheme": {
            "NIGHT": {
                "label": "Ночной",
                "name": "NIGHT"
            },
            "DAY": {
                "label": "Дневной",
                "name": "DAY"
            },
            "AUTO": {
                "label": "Адаптивный",
                "name": "AUTO"
            }
        },
        "timeZone": {
            "KUWAIT": {
                "cityName": "Эль-Кувейт",
                "ianaId": "Asia/Kuwait",
                "label": "KWI",
                "name": "KUWAIT",
                "offsetFromGMT": 3.0
            },
            "PRAGUE": {
                "cityName": "Прага",
                "ianaId": "Europe/Prague",
                "label": "PRG",
                "name": "PRAGUE",
                "offsetFromGMT": 1.0
            },
            "JAKARTA": {
                "cityName": "Джакарта",
                "ianaId": "Asia/Jakarta",
                "label": "CGK",
                "name": "JAKARTA",
                "offsetFromGMT": 7.0
            },
            "PERTH": {
                "cityName": "Перт",
                "ianaId": "Australia/Perth",
                "label": "PER",
                "name": "PERTH",
                "offsetFromGMT": 8.0
            },
            "TBILISI": {
                "cityName": "Тбилиси",
                "ianaId": "Asia/Tbilisi",
                "label": "TBS",
                "name": "TBILISI",
                "offsetFromGMT": 4.0
            },
            "FIJI": {
                "cityName": "Сува",
                "ianaId": "Pacific/Fiji",
                "label": "SUV",
                "name": "FIJI",
                "offsetFromGMT": 12.0
            },
            "KARACHI": {
                "cityName": "Карачи",
                "ianaId": "Asia/Karachi",
                "label": "KHI",
                "name": "KARACHI",
                "offsetFromGMT": 5.0
            },
            "PARIS": {
                "cityName": "Париж",
                "ianaId": "Europe/Paris",
                "label": "CDG",
                "name": "PARIS",
                "offsetFromGMT": 1.0
            },
            "MUMBAI": {
                "cityName": "Мумбаи",
                "ianaId": "Asia/Kolkata",
                "label": "BOM",
                "name": "MUMBAI",
                "offsetFromGMT": 5.5
            },
            "PORT_MORESBY": {
                "cityName": "Порт-Морсби",
                "ianaId": "Pacific/Port_Moresby",
                "label": "POM",
                "name": "PORT_MORESBY",
                "offsetFromGMT": 10.0
            },
            "MAGADAN": {
                "cityName": "Магадан",
                "ianaId": "Asia/Magadan",
                "label": "GDX",
                "name": "MAGADAN",
                "offsetFromGMT": 11.0
            },
            "DALLAS": {
                "cityName": "Даллас",
                "ianaId": "America/Chicago",
                "label": "DFW",
                "name": "DALLAS",
                "offsetFromGMT": -6.0
            },
            "PHOENIX": {
                "cityName": "Финикс",
                "ianaId": "America/Phoenix",
                "label": "PHX",
                "name": "PHOENIX",
                "offsetFromGMT": -7.0
            },
            "BUENOS_AIRES": {
                "cityName": "Буэнос-Айрес",
                "ianaId": "America/Argentina/Buenos_Aires",
                "label": "EZE",
                "name": "BUENOS_AIRES",
                "offsetFromGMT": -3.0
            },
            "MOSCOW": {
                "cityName": "Москва",
                "ianaId": "Europe/Moscow",
                "label": "SVO",
                "name": "MOSCOW",
                "offsetFromGMT": 3.0
            },
            "COLOMBO": {
                "cityName": "Коломбо",
                "ianaId": "Asia/Colombo",
                "label": "CMB",
                "name": "COLOMBO",
                "offsetFromGMT": 5.5
            },
            "SYDNEY": {
                "cityName": "Сидней",
                "ianaId": "Australia/Sydney",
                "label": "SYD",
                "name": "SYDNEY",
                "offsetFromGMT": 10.0
            },
            "RIO_DE_JANEIRO": {
                "cityName": "Рио-де-Жанейро",
                "ianaId": "America/Sao_Paulo",
                "label": "GIG",
                "name": "RIO_DE_JANEIRO",
                "offsetFromGMT": -3.0
            },
            "SOFIA": {
                "cityName": "София",
                "ianaId": "Europe/Sofia",
                "label": "SOF",
                "name": "SOFIA",
                "offsetFromGMT": 2.0
            },
            "CHICAGO": {
                "cityName": "Чикаго",
                "ianaId": "America/Chicago",
                "label": "ORD",
                "name": "CHICAGO",
                "offsetFromGMT": -6.0
            },
            "GUAM": {
                "cityName": "Гуам",
                "ianaId": "Pacific/Guam",
                "label": "GUM",
                "name": "GUAM",
                "offsetFromGMT": 10.0
            },
            "LONDON": {
                "cityName": "Лондон",
                "ianaId": "Europe/London",
                "label": "LON",
                "name": "LONDON",
                "offsetFromGMT": 0.0
            },
            "DENVER": {
                "cityName": "Денвер",
                "ianaId": "America/Denver",
                "label": "DEN",
                "name": "DENVER",
                "offsetFromGMT": -7.0
            },
            "DELHI": {
                "cityName": "Дели",
                "ianaId": "Asia/Kolkata",
                "label": "DEL",
                "name": "DELHI",
                "offsetFromGMT": 5.5
            },
            "PYONGYANG": {
                "cityName": "Пхеньян",
                "ianaId": "Asia/Pyongyang",
                "label": "FNJ",
                "name": "PYONGYANG",
                "offsetFromGMT": 9.0
            },
            "VANCOUVER": {
                "cityName": "Ванкувер",
                "ianaId": "America/Vancouver",
                "label": "YVR",
                "name": "VANCOUVER",
                "offsetFromGMT": -8.0
            },
            "SOLOMON_ISLANDS": {
                "cityName": "Хониара",
                "ianaId": "Pacific/Guadalcanal",
                "label": "HIR",
                "name": "SOLOMON_ISLANDS",
                "offsetFromGMT": 11.0
            },
            "WARSAW": {
                "cityName": "Варшава",
                "ianaId": "Europe/Warsaw",
                "label": "WAW",
                "name": "WARSAW",
                "offsetFromGMT": 1.0
            },
            "NAIROBI": {
                "cityName": "Найроби",
                "ianaId": "Africa/Nairobi",
                "label": "NBO",
                "name": "NAIROBI",
                "offsetFromGMT": 3.0
            },
            "LOS_ANGELES": {
                "cityName": "Лос-Анджелес",
                "ianaId": "America/Los_Angeles",
                "label": "LAX",
                "name": "LOS_ANGELES",
                "offsetFromGMT": -8.0
            },
            "BOGOTA": {
                "cityName": "Богота",
                "ianaId": "America/Bogota",
                "label": "BOG",
                "name": "BOGOTA",
                "offsetFromGMT": -5.0
            },
            "CALGARY": {
                "cityName": "Калгари",
                "ianaId": "America/Edmonton",
                "label": "YYC",
                "name": "CALGARY",
                "offsetFromGMT": -7.0
            },
            "MEXICO_CITY": {
                "cityName": "Мехико",
                "ianaId": "America/Mexico_City",
                "label": "MEX",
                "name": "MEXICO_CITY",
                "offsetFromGMT": -6.0
            },
            "KUALA_LUMPUR": {
                "cityName": "Куала-Лумпур",
                "ianaId": "Asia/Kuala_Lumpur",
                "label": "KUL",
                "name": "KUALA_LUMPUR",
                "offsetFromGMT": 8.0
            },
            "RIYADH": {
                "cityName": "Эр-Рияд",
                "ianaId": "Asia/Riyadh",
                "label": "RUH",
                "name": "RIYADH",
                "offsetFromGMT": 3.0
            },
            "MELBOURNE": {
                "cityName": "Мельбурн",
                "ianaId": "Australia/Melbourne",
                "label": "MEL",
                "name": "MELBOURNE",
                "offsetFromGMT": 10.0
            },
            "ATHENS": {
                "cityName": "Афины",
                "ianaId": "Europe/Athens",
                "label": "ATH",
                "name": "ATHENS",
                "offsetFromGMT": 2.0
            },
            "ADAK": {
                "cityName": "Адак",
                "ianaId": "America/Adak",
                "label": "ADK",
                "name": "ADAK",
                "offsetFromGMT": -10.0
            },
            "TASHKENT": {
                "cityName": "Ташкент",
                "ianaId": "Asia/Tashkent",
                "label": "TAS",
                "name": "TASHKENT",
                "offsetFromGMT": 5.0
            },
            "DUBLIN": {
                "cityName": "Дублин",
                "ianaId": "Europe/Dublin",
                "label": "DUB",
                "name": "DUBLIN",
                "offsetFromGMT": 0.0
            },
            "AUCKLAND": {
                "cityName": "Окленд",
                "ianaId": "Pacific/Auckland",
                "label": "AKL",
                "name": "AUCKLAND",
                "offsetFromGMT": 12.0
            },
            "ACCRA": {
                "cityName": "Аккра",
                "ianaId": "Africa/Accra",
                "label": "ACC",
                "name": "ACCRA",
                "offsetFromGMT": 0.0
            },
            "LISBON": {
                "cityName": "Лиссабон",
                "ianaId": "Europe/Lisbon",
                "label": "LIS",
                "name": "LISBON",
                "offsetFromGMT": 0.0
            },
            "DOHA": {
                "cityName": "Доха",
                "ianaId": "Asia/Qatar",
                "label": "DOH",
                "name": "DOHA",
                "offsetFromGMT": 3.0
            },
            "HONG_KONG": {
                "cityName": "Гонконг",
                "ianaId": "Asia/Hong_Kong",
                "label": "HKG",
                "name": "HONG_KONG",
                "offsetFromGMT": 8.0
            },
            "TAIPEI": {
                "cityName": "Тайбэй",
                "ianaId": "Asia/Taipei",
                "label": "TPE",
                "name": "TAIPEI",
                "offsetFromGMT": 8.0
            },
            "BERLIN": {
                "cityName": "Берлин",
                "ianaId": "Europe/Berlin",
                "label": "BER",
                "name": "BERLIN",
                "offsetFromGMT": 1.0
            },
            "MAURITIUS": {
                "cityName": "Порт-Луи",
                "ianaId": "Indian/Mauritius",
                "label": "MRU",
                "name": "MAURITIUS",
                "offsetFromGMT": 4.0
            },
            "HANOI": {
                "cityName": "Ханой",
                "ianaId": "Asia/Bangkok",
                "label": "HAN",
                "name": "HANOI",
                "offsetFromGMT": 7.0
            },
            "KIRITIMATI": {
                "cityName": "Киритимати",
                "ianaId": "Pacific/Kiritimati",
                "label": "CXI",
                "name": "KIRITIMATI",
                "offsetFromGMT": 14.0
            },
            "DHAKA": {
                "cityName": "Дакка",
                "ianaId": "Asia/Dhaka",
                "label": "DAC",
                "name": "DHAKA",
                "offsetFromGMT": 6.0
            },
            "BANGKOK": {
                "cityName": "Бангкок",
                "ianaId": "Asia/Bangkok",
                "label": "BKK",
                "name": "BANGKOK",
                "offsetFromGMT": 7.0
            },
            "BRUSSELS": {
                "cityName": "Брюссель",
                "ianaId": "Europe/Brussels",
                "label": "BRU",
                "name": "BRUSSELS",
                "offsetFromGMT": 1.0
            },
            "OSLO": {
                "cityName": "Осло",
                "ianaId": "Europe/Oslo",
                "label": "OSL",
                "name": "OSLO",
                "offsetFromGMT": 1.0
            },
            "MINSK": {
                "cityName": "Минск",
                "ianaId": "Europe/Minsk",
                "label": "MSQ",
                "name": "MINSK",
                "offsetFromGMT": 3.0
            },
            "HONOLULU": {
                "cityName": "Гонолулу",
                "ianaId": "Pacific/Honolulu",
                "label": "HNL",
                "name": "HONOLULU",
                "offsetFromGMT": -10.0
            },
            "SANTIAGO": {
                "cityName": "Сантьяго",
                "ianaId": "America/Santiago",
                "label": "SCL",
                "name": "SANTIAGO",
                "offsetFromGMT": -4.0
            },
            "MADRID": {
                "cityName": "Мадрид",
                "ianaId": "Europe/Madrid",
                "label": "MAD",
                "name": "MADRID",
                "offsetFromGMT": 1.0
            },
            "NEW_YORK": {
                "cityName": "Нью-Йорк",
                "ianaId": "America/New_York",
                "label": "JFK",
                "name": "NEW_YORK",
                "offsetFromGMT": -5.0
            },
            "TAHITI": {
                "cityName": "Папеэте",
                "ianaId": "Pacific/Tahiti",
                "label": "PPT",
                "name": "TAHITI",
                "offsetFromGMT": -10.0
            },
            "BUCHAREST": {
                "cityName": "Бухарест",
                "ianaId": "Europe/Bucharest",
                "label": "OTP",
                "name": "BUCHAREST",
                "offsetFromGMT": 2.0
            },
            "BRISBANE": {
                "cityName": "Брисбен",
                "ianaId": "Australia/Brisbane",
                "label": "BNE",
                "name": "BRISBANE",
                "offsetFromGMT": 10.0
            },
            "STOCKHOLM": {
                "cityName": "Стокгольм",
                "ianaId": "Europe/Stockholm",
                "label": "ARN",
                "name": "STOCKHOLM",
                "offsetFromGMT": 1.0
            },
            "DUBAI": {
                "cityName": "Дубай",
                "ianaId": "Asia/Dubai",
                "label": "DXB",
                "name": "DUBAI",
                "offsetFromGMT": 4.0
            },
            "TOKYO": {
                "cityName": "Токио",
                "ianaId": "Asia/Tokyo",
                "label": "NRT",
                "name": "TOKYO",
                "offsetFromGMT": 9.0
            },
            "TORONTO": {
                "cityName": "Торонто",
                "ianaId": "America/Toronto",
                "label": "YYZ",
                "name": "TORONTO",
                "offsetFromGMT": -5.0
            },
            "NOUMEA": {
                "cityName": "Нумеа",
                "ianaId": "Pacific/Noumea",
                "label": "NOU",
                "name": "NOUMEA",
                "offsetFromGMT": 11.0
            },
            "MIAMI": {
                "cityName": "Майами",
                "ianaId": "America/New_York",
                "label": "MIA",
                "name": "MIAMI",
                "offsetFromGMT": -5.0
            },
            "BEIJING": {
                "cityName": "Пекин",
                "ianaId": "Asia/Shanghai",
                "label": "PEK",
                "name": "BEIJING",
                "offsetFromGMT": 8.0
            },
            "VLADIVOSTOK": {
                "cityName": "Владивосток",
                "ianaId": "Asia/Vladivostok",
                "label": "VVO",
                "name": "VLADIVOSTOK",
                "offsetFromGMT": 11.0
            },
            "CARACAS": {
                "cityName": "Каракас",
                "ianaId": "America/Caracas",
                "label": "CCS",
                "name": "CARACAS",
                "offsetFromGMT": -4.0
            },
            "ROME": {
                "cityName": "Рим",
                "ianaId": "Europe/Rome",
                "label": "FCO",
                "name": "ROME",
                "offsetFromGMT": 1.0
            },
            "BAGHDAD": {
                "cityName": "Багдад",
                "ianaId": "Asia/Baghdad",
                "label": "BGW",
                "name": "BAGHDAD",
                "offsetFromGMT": 3.0
            },
            "ZURICH": {
                "cityName": "Цюрих",
                "ianaId": "Europe/Zurich",
                "label": "ZRH",
                "name": "ZURICH",
                "offsetFromGMT": 1.0
            },
            "CAIRO": {
                "cityName": "Каир",
                "ianaId": "Africa/Cairo",
                "label": "CAI",
                "name": "CAIRO",
                "offsetFromGMT": 2.0
            },
            "ISLAMABAD": {
                "cityName": "Исламабад",
                "ianaId": "Asia/Karachi",
                "label": "ISB",
                "name": "ISLAMABAD",
                "offsetFromGMT": 5.0
            },
            "ISTANBUL": {
                "cityName": "Стамбул",
                "ianaId": "Europe/Istanbul",
                "label": "IST",
                "name": "ISTANBUL",
                "offsetFromGMT": 3.0
            },
            "YEKATERINBURG": {
                "cityName": "Екатеринбург",
                "ianaId": "Asia/Yekaterinburg",
                "label": "SVX",
                "name": "YEKATERINBURG",
                "offsetFromGMT": 5.0
            },
            "WELLINGTON": {
                "cityName": "Веллингтон",
                "ianaId": "Pacific/Auckland",
                "label": "WLG",
                "name": "WELLINGTON",
                "offsetFromGMT": 12.0
            },
            "BUDAPEST": {
                "cityName": "Будапешт",
                "ianaId": "Europe/Budapest",
                "label": "BUD",
                "name": "BUDAPEST",
                "offsetFromGMT": 1.0
            },
            "ASTANA": {
                "cityName": "Астана",
                "ianaId": "Asia/Almaty",
                "label": "NQZ",
                "name": "ASTANA",
                "offsetFromGMT": 6.0
            },
            "SHANGHAI": {
                "cityName": "Шанхай",
                "ianaId": "Asia/Shanghai",
                "label": "PVG",
                "name": "SHANGHAI",
                "offsetFromGMT": 8.0
            },
            "AMSTERDAM": {
                "cityName": "Амстердам",
                "ianaId": "Europe/Amsterdam",
                "label": "AMS",
                "name": "AMSTERDAM",
                "offsetFromGMT": 1.0
            },
            "KYIV": {
                "cityName": "Киев",
                "ianaId": "Europe/Kiev",
                "label": "KBP",
                "name": "KYIV",
                "offsetFromGMT": 2.0
            },
            "BAKU": {
                "cityName": "Баку",
                "ianaId": "Asia/Baku",
                "label": "GYD",
                "name": "BAKU",
                "offsetFromGMT": 4.0
            },
            "JERUSALEM": {
                "cityName": "Иерусалим",
                "ianaId": "Asia/Jerusalem",
                "label": "TLV",
                "name": "JERUSALEM",
                "offsetFromGMT": 2.0
            },
            "ALMATY": {
                "cityName": "Алматы",
                "ianaId": "Asia/Almaty",
                "label": "ALA",
                "name": "ALMATY",
                "offsetFromGMT": 6.0
            },
            "KAMCHATKA": {
                "cityName": "Петропавловск-Камчатский",
                "ianaId": "Asia/Kamchatka",
                "label": "PKC",
                "name": "KAMCHATKA",
                "offsetFromGMT": 12.0
            },
            "LA_PAZ": {
                "cityName": "Ла-Пас",
                "ianaId": "America/La_Paz",
                "label": "LPB",
                "name": "LA_PAZ",
                "offsetFromGMT": -4.0
            },
            "SEOUL": {
                "cityName": "Сеул",
                "ianaId": "Asia/Seoul",
                "label": "ICN",
                "name": "SEOUL",
                "offsetFromGMT": 9.0
            },
            "HELSINKI": {
                "cityName": "Хельсинки",
                "ianaId": "Europe/Helsinki",
                "label": "HEL",
                "name": "HELSINKI",
                "offsetFromGMT": 2.0
            },
            "CHATHAM": {
                "cityName": "Чатем",
                "ianaId": "Pacific/Chatham",
                "label": "CHT",
                "name": "CHATHAM",
                "offsetFromGMT": 12.75
            },
            "SAO_PAULO": {
                "cityName": "Сан-Паулу",
                "ianaId": "America/Sao_Paulo",
                "label": "GRU",
                "name": "SAO_PAULO",
                "offsetFromGMT": -3.0
            },
            "VIENNA": {
                "cityName": "Вена",
                "ianaId": "Europe/Vienna",
                "label": "VIE",
                "name": "VIENNA",
                "offsetFromGMT": 1.0
            },
            "YEREVAN": {
                "cityName": "Ереван",
                "ianaId": "Asia/Yerevan",
                "label": "EVN",
                "name": "YEREVAN",
                "offsetFromGMT": 4.0
            },
            "ANCHORAGE": {
                "cityName": "Анкоридж",
                "ianaId": "America/Anchorage",
                "label": "ANC",
                "name": "ANCHORAGE",
                "offsetFromGMT": -9.0
            },
            "SEATTLE": {
                "cityName": "Сиэтл",
                "ianaId": "America/Los_Angeles",
                "label": "SEA",
                "name": "SEATTLE",
                "offsetFromGMT": -8.0
            },
            "JOHANNESBURG": {
                "cityName": "Йоханнесбург",
                "ianaId": "Africa/Johannesburg",
                "label": "JNB",
                "name": "JOHANNESBURG",
                "offsetFromGMT": 2.0
            },
            "KOLKATA": {
                "cityName": "Калькутта",
                "ianaId": "Asia/Kolkata",
                "label": "CCU",
                "name": "KOLKATA",
                "offsetFromGMT": 5.5
            },
            "COPENHAGEN": {
                "cityName": "Копенгаген",
                "ianaId": "Europe/Copenhagen",
                "label": "CPH",
                "name": "COPENHAGEN",
                "offsetFromGMT": 1.0
            },
            "SINGAPORE": {
                "cityName": "Сингапур",
                "ianaId": "Asia/Singapore",
                "label": "SIN",
                "name": "SINGAPORE",
                "offsetFromGMT": 8.0
            }
        },
        "watchType": {
            "CLASSIC": {
                "label": "Классический",
                "name": "CLASSIC"
            },
            "FUNKY": {
                "label": "Веселый",
                "name": "FUNKY"
            },
            "FUSION": {
                "label": "Футуристичный",
                "name": "FUSION"
            },
            "VINTAGE": {
                "label": "Винтажный",
                "name": "VINTAGE"
            }
        }
    },
    items: [
        {
            "colorTheme": "AUTO",
            "timezone": "MOSCOW",
            "watchType": "CLASSIC"
        },
        {
            "colorTheme": "AUTO",
            "timezone": "LONDON",
            "watchType": "CLASSIC"
        },
        {
            "colorTheme": "AUTO",
            "timezone": "BEIJING",
            "watchType": "CLASSIC"
        },
        {
            "colorTheme": "AUTO",
            "timezone": "NEW_YORK",
            "watchType": "CLASSIC"
        }
    ],
    default: [
        {
            "colorTheme": "AUTO",
            "timezone": "MOSCOW",
            "watchType": "CLASSIC"
        },
        {
            "colorTheme": "AUTO",
            "timezone": "LONDON",
            "watchType": "CLASSIC"
        },
        {
            "colorTheme": "AUTO",
            "timezone": "BEIJING",
            "watchType": "CLASSIC"
        },
        {
            "colorTheme": "AUTO",
            "timezone": "NEW_YORK",
            "watchType": "CLASSIC"
        }
    ],
    default_clock: {
        "colorTheme": "AUTO",
        "timezone": "MOSCOW",
        "watchType": "CLASSIC"
    }
};

const clockSlice = createSlice({
    name: 'watches',
    initialState,
    reducers: {
        setOptions: (state, action) => {
            state.options = action.payload;
        },
        setClock: (state, action) => {
            state.items = action.payload;
        },
        defaultClock: (state) => {
            state.items = state.default;
        }
    }
});

export const { setClock, defaultClock, setOptions } = clockSlice.actions;
export default clockSlice.reducer;
export const selectClock = (state) => state.watches.items;
export const selectOptions = (state) => state.watches.options;
export const selectDefault = (state) => state.watches.default_clock;
