// 全球国家时区配置 - 使用中文名称
const countryTimezones = {
    // 亚洲
    '中国': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '中国标准时间' },
    '日本': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '日本标准时间' },
    '韩国': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '韩国标准时间' },
    '朝鲜': { timezone: 'Asia/Pyongyang', flag: '🇰🇵', displayName: '朝鲜标准时间' },
    '蒙古': { timezone: 'Asia/Ulaanbaatar', flag: '🇲🇳', displayName: '蒙古时间' },
    '哈萨克斯坦': { timezone: 'Asia/Almaty', flag: '🇰🇿', displayName: '哈萨克斯坦时间' },
    '乌兹别克斯坦': { timezone: 'Asia/Tashkent', flag: '🇺🇿', displayName: '乌兹别克斯坦时间' },
    '吉尔吉斯斯坦': { timezone: 'Asia/Bishkek', flag: '🇰🇬', displayName: '吉尔吉斯斯坦时间' },
    '塔吉克斯坦': { timezone: 'Asia/Dushanbe', flag: '🇹🇯', displayName: '塔吉克斯坦时间' },
    '土库曼斯坦': { timezone: 'Asia/Ashgabat', flag: '🇹🇲', displayName: '土库曼斯坦时间' },
    '阿富汗': { timezone: 'Asia/Kabul', flag: '🇦🇫', displayName: '阿富汗时间' },
    '巴基斯坦': { timezone: 'Asia/Karachi', flag: '🇵🇰', displayName: '巴基斯坦时间' },
    '印度': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '印度标准时间' },
    '尼泊尔': { timezone: 'Asia/Kathmandu', flag: '🇳🇵', displayName: '尼泊尔时间' },
    '不丹': { timezone: 'Asia/Thimphu', flag: '🇧🇹', displayName: '不丹时间' },
    '孟加拉国': { timezone: 'Asia/Dhaka', flag: '🇧🇩', displayName: '孟加拉国时间' },
    '斯里兰卡': { timezone: 'Asia/Colombo', flag: '🇱🇰', displayName: '斯里兰卡时间' },
    '马尔代夫': { timezone: 'Indian/Maldives', flag: '🇲🇻', displayName: '马尔代夫时间' },
    '缅甸': { timezone: 'Asia/Yangon', flag: '🇲🇲', displayName: '缅甸时间' },
    '泰国': { timezone: 'Asia/Bangkok', flag: '🇹🇭', displayName: '泰国时间' },
    '老挝': { timezone: 'Asia/Vientiane', flag: '🇱🇦', displayName: '老挝时间' },
    '柬埔寨': { timezone: 'Asia/Phnom_Penh', flag: '🇰🇭', displayName: '柬埔寨时间' },
    '越南': { timezone: 'Asia/Ho_Chi_Minh', flag: '🇻🇳', displayName: '越南时间' },
    '马来西亚': { timezone: 'Asia/Kuala_Lumpur', flag: '🇲🇾', displayName: '马来西亚时间' },
    '新加坡': { timezone: 'Asia/Singapore', flag: '🇸🇬', displayName: '新加坡时间' },
    '印度尼西亚': { timezone: 'Asia/Jakarta', flag: '🇮🇩', displayName: '印度尼西亚时间' },
    '文莱': { timezone: 'Asia/Brunei', flag: '🇧🇳', displayName: '文莱时间' },
    '菲律宾': { timezone: 'Asia/Manila', flag: '🇵🇭', displayName: '菲律宾时间' },
    '东帝汶': { timezone: 'Asia/Dili', flag: '🇹🇱', displayName: '东帝汶时间' },
    
    // 大洋洲
    '澳大利亚东部': { timezone: 'Australia/Sydney', flag: '🇦🇺', displayName: '澳大利亚东部时间' },
    '澳大利亚西部': { timezone: 'Australia/Perth', flag: '🇦🇺', displayName: '澳大利亚西部时间' },
    '澳大利亚中部': { timezone: 'Australia/Adelaide', flag: '🇦🇺', displayName: '澳大利亚中部时间' },
    '新西兰': { timezone: 'Pacific/Auckland', flag: '🇳🇿', displayName: '新西兰时间' },
    '巴布亚新几内亚': { timezone: 'Pacific/Port_Moresby', flag: '🇵🇬', displayName: '巴布亚新几内亚时间' },
    '所罗门群岛': { timezone: 'Pacific/Guadalcanal', flag: '🇸🇧', displayName: '所罗门群岛时间' },
    '瓦努阿图': { timezone: 'Pacific/Efate', flag: '🇻🇺', displayName: '瓦努阿图时间' },
    '新喀里多尼亚': { timezone: 'Pacific/Noumea', flag: '🇳🇨', displayName: '新喀里多尼亚时间' },
    '斐济': { timezone: 'Pacific/Fiji', flag: '🇫🇯', displayName: '斐济时间' },
    '汤加': { timezone: 'Pacific/Tongatapu', flag: '🇹🇴', displayName: '汤加时间' },
    '萨摩亚': { timezone: 'Pacific/Apia', flag: '🇼🇸', displayName: '萨摩亚时间' },
    '基里巴斯': { timezone: 'Pacific/Tarawa', flag: '🇰🇮', displayName: '基里巴斯时间' },
    '基里巴斯/东部': { timezone: 'Pacific/Kiritimati', flag: '🇰🇮', displayName: '基里巴斯东部时间' },
    '图瓦卢': { timezone: 'Pacific/Funafuti', flag: '🇹🇻', displayName: '图瓦卢时间' },
    '瑙鲁': { timezone: 'Pacific/Nauru', flag: '🇳🇷', displayName: '瑙鲁时间' },
    '马绍尔群岛': { timezone: 'Pacific/Majuro', flag: '🇲🇭', displayName: '马绍尔群岛时间' },
    '密克罗尼西亚/楚克州': { timezone: 'Pacific/Chuuk', flag: '🇫🇲', displayName: '密克罗尼西亚楚克州时间' },
    '密克罗尼西亚/波纳佩州': { timezone: 'Pacific/Pohnpei', flag: '🇫🇲', displayName: '密克罗尼西亚波纳佩州时间' },
    '帕劳': { timezone: 'Pacific/Palau', flag: '🇵🇼', displayName: '帕劳时间' },
    '关岛': { timezone: 'Pacific/Guam', flag: '🇬🇺', displayName: '关岛时间' },
    '北马里亚纳群岛': { timezone: 'Pacific/Saipan', flag: '🇲🇵', displayName: '北马里亚纳群岛时间' },
    '美属萨摩亚': { timezone: 'Pacific/Pago_Pago', flag: '🇦🇸', displayName: '美属萨摩亚时间' },
    '库克群岛': { timezone: 'Pacific/Rarotonga', flag: '🇨🇰', displayName: '库克群岛时间' },
    '法属波利尼西亚': { timezone: 'Pacific/Tahiti', flag: '🇵🇫', displayName: '法属波利尼西亚时间' },
    '皮特凯恩群岛': { timezone: 'Pacific/Pitcairn', flag: '🇵🇳', displayName: '皮特凯恩群岛时间' },
    '复活节岛': { timezone: 'Pacific/Easter', flag: '🇨🇱', displayName: '复活节岛时间' },
    '加拉帕戈斯群岛': { timezone: 'Pacific/Galapagos', flag: '🇪🇨', displayName: '加拉帕戈斯群岛时间' },
    '夏威夷': { timezone: 'Pacific/Honolulu', flag: '🇺🇸', displayName: '夏威夷时间' },
    
    // 北美洲
    '美国阿拉斯加': { timezone: 'America/Anchorage', flag: '🇺🇸', displayName: '阿拉斯加时间' },
    '美国西部': { timezone: 'America/Los_Angeles', flag: '🇺🇸', displayName: '美国西部时间' },
    '美国山地': { timezone: 'America/Denver', flag: '🇺🇸', displayName: '美国山地时间' },
    '美国中部': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '美国中部时间' },
    '美国东部': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '美国东部时间' },
    '加拿大西部': { timezone: 'America/Vancouver', flag: '🇨🇦', displayName: '加拿大西部时间' },
    '加拿大中部': { timezone: 'America/Winnipeg', flag: '🇨🇦', displayName: '加拿大中部时间' },
    '加拿大东部': { timezone: 'America/Toronto', flag: '🇨🇦', displayName: '加拿大东部时间' },
    '加拿大纽芬兰': { timezone: 'America/St_Johns', flag: '🇨🇦', displayName: '纽芬兰时间' },
    '格陵兰': { timezone: 'America/Godthab', flag: '🇬🇱', displayName: '格陵兰时间' },
    '墨西哥西部': { timezone: 'America/Tijuana', flag: '🇲🇽', displayName: '墨西哥西部时间' },
    '墨西哥首都/中部': { timezone: 'America/Mexico_City', flag: '🇲🇽', displayName: '墨西哥首都/中部时间' },
    '墨西哥东部': { timezone: 'America/Cancun', flag: '🇲🇽', displayName: '墨西哥东部时间' },
    '危地马拉': { timezone: 'America/Guatemala', flag: '🇬🇹', displayName: '危地马拉时间' },
    '伯利兹': { timezone: 'America/Belize', flag: '🇧🇿', displayName: '伯利兹时间' },
    '萨尔瓦多': { timezone: 'America/El_Salvador', flag: '🇸🇻', displayName: '萨尔瓦多时间' },
    '洪都拉斯': { timezone: 'America/Tegucigalpa', flag: '🇭🇳', displayName: '洪都拉斯时间' },
    '尼加拉瓜': { timezone: 'America/Managua', flag: '🇳🇮', displayName: '尼加拉瓜时间' },
    '哥斯达黎加': { timezone: 'America/Costa_Rica', flag: '🇨🇷', displayName: '哥斯达黎加时间' },
    '巴拿马': { timezone: 'America/Panama', flag: '🇵🇦', displayName: '巴拿马时间' },
    '古巴': { timezone: 'America/Havana', flag: '🇨🇺', displayName: '古巴时间' },
    '牙买加': { timezone: 'America/Jamaica', flag: '🇯🇲', displayName: '牙买加时间' },
    '海地': { timezone: 'America/Port-au-Prince', flag: '🇭🇹', displayName: '海地时间' },
    '多米尼加': { timezone: 'America/Santo_Domingo', flag: '🇩🇴', displayName: '多米尼加时间' },
    '波多黎各': { timezone: 'America/Puerto_Rico', flag: '🇵🇷', displayName: '波多黎各时间' },
    '特立尼达和多巴哥': { timezone: 'America/Port_of_Spain', flag: '🇹🇹', displayName: '特立尼达和多巴哥时间' },
    '巴巴多斯': { timezone: 'America/Barbados', flag: '🇧🇧', displayName: '巴巴多斯时间' },
    '圣基茨和尼维斯': { timezone: 'America/St_Kitts', flag: '🇰🇳', displayName: '圣基茨和尼维斯时间' },
    '安提瓜和巴布达': { timezone: 'America/Antigua', flag: '🇦🇬', displayName: '安提瓜和巴布达时间' },
    '多米尼克': { timezone: 'America/Dominica', flag: '🇩🇲', displayName: '多米尼克时间' },
    '圣卢西亚': { timezone: 'America/St_Lucia', flag: '🇱🇨', displayName: '圣卢西亚时间' },
    '圣文森特和格林纳丁斯': { timezone: 'America/St_Vincent', flag: '🇻🇨', displayName: '圣文森特和格林纳丁斯时间' },
    '格林纳达': { timezone: 'America/Grenada', flag: '🇬🇩', displayName: '格林纳达时间' },
    '巴哈马': { timezone: 'America/Nassau', flag: '🇧🇸', displayName: '巴哈马时间' },
    '百慕大': { timezone: 'Atlantic/Bermuda', flag: '🇧🇲', displayName: '百慕大时间' },
    
    // 南美洲
    '巴西': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '巴西时间' },
    '阿根廷': { timezone: 'America/Argentina/Buenos_Aires', flag: '🇦🇷', displayName: '阿根廷时间' },
    '智利': { timezone: 'America/Santiago', flag: '🇨🇱', displayName: '智利时间' },
    '乌拉圭': { timezone: 'America/Montevideo', flag: '🇺🇾', displayName: '乌拉圭时间' },
    '巴拉圭': { timezone: 'America/Asuncion', flag: '🇵🇾', displayName: '巴拉圭时间' },
    '玻利维亚': { timezone: 'America/La_Paz', flag: '🇧🇴', displayName: '玻利维亚时间' },
    '秘鲁': { timezone: 'America/Lima', flag: '🇵🇪', displayName: '秘鲁时间' },
    '厄瓜多尔': { timezone: 'America/Guayaquil', flag: '🇪🇨', displayName: '厄瓜多尔时间' },
    '哥伦比亚': { timezone: 'America/Bogota', flag: '🇨🇴', displayName: '哥伦比亚时间' },
    '委内瑞拉': { timezone: 'America/Caracas', flag: '🇻🇪', displayName: '委内瑞拉时间' },
    '圭亚那': { timezone: 'America/Guyana', flag: '🇬🇾', displayName: '圭亚那时间' },
    '苏里南': { timezone: 'America/Paramaribo', flag: '🇸🇷', displayName: '苏里南时间' },
    '法属圭亚那': { timezone: 'America/Cayenne', flag: '🇬🇫', displayName: '法属圭亚那时间' },
    
    // 欧洲
    '冰岛': { timezone: 'Atlantic/Reykjavik', flag: '🇮🇸', displayName: '冰岛时间' },
    '爱尔兰': { timezone: 'Europe/Dublin', flag: '🇮🇪', displayName: '爱尔兰时间' },
    '英国': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '英国格林威治时间' },
    '葡萄牙': { timezone: 'Europe/Lisbon', flag: '🇵🇹', displayName: '葡萄牙时间' },
    '西班牙': { timezone: 'Europe/Madrid', flag: '🇪🇸', displayName: '西班牙时间' },
    '法国': { timezone: 'Europe/Paris', flag: '🇫🇷', displayName: '中欧时间' },
    '比利时': { timezone: 'Europe/Brussels', flag: '🇧🇪', displayName: '比利时时间' },
    '荷兰': { timezone: 'Europe/Amsterdam', flag: '🇳🇱', displayName: '荷兰时间' },
    '卢森堡': { timezone: 'Europe/Luxembourg', flag: '🇱🇺', displayName: '卢森堡时间' },
    '德国': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '中欧时间' },
    '奥地利': { timezone: 'Europe/Vienna', flag: '🇦🇹', displayName: '奥地利时间' },
    '瑞士': { timezone: 'Europe/Zurich', flag: '🇨🇭', displayName: '瑞士时间' },
    '列支敦士登': { timezone: 'Europe/Vaduz', flag: '🇱🇮', displayName: '列支敦士登时间' },
    '意大利': { timezone: 'Europe/Rome', flag: '🇮🇹', displayName: '意大利时间' },
    '圣马力诺': { timezone: 'Europe/San_Marino', flag: '🇸🇲', displayName: '圣马力诺时间' },
    '梵蒂冈': { timezone: 'Europe/Vatican', flag: '🇻🇦', displayName: '梵蒂冈时间' },
    '马耳他': { timezone: 'Europe/Malta', flag: '🇲🇹', displayName: '马耳他时间' },
    '摩纳哥': { timezone: 'Europe/Monaco', flag: '🇲🇨', displayName: '摩纳哥时间' },
    '安道尔': { timezone: 'Europe/Andorra', flag: '🇦🇩', displayName: '安道尔时间' },
    '丹麦': { timezone: 'Europe/Copenhagen', flag: '🇩🇰', displayName: '丹麦时间' },
    '瑞典': { timezone: 'Europe/Stockholm', flag: '🇸🇪', displayName: '瑞典时间' },
    '挪威': { timezone: 'Europe/Oslo', flag: '🇳🇴', displayName: '挪威时间' },
    '芬兰': { timezone: 'Europe/Helsinki', flag: '🇫🇮', displayName: '芬兰时间' },
    '爱沙尼亚': { timezone: 'Europe/Tallinn', flag: '🇪🇪', displayName: '爱沙尼亚时间' },
    '拉脱维亚': { timezone: 'Europe/Riga', flag: '🇱🇻', displayName: '拉脱维亚时间' },
    '立陶宛': { timezone: 'Europe/Vilnius', flag: '🇱🇹', displayName: '立陶宛时间' },
    '波兰': { timezone: 'Europe/Warsaw', flag: '🇵🇱', displayName: '波兰时间' },
    '捷克': { timezone: 'Europe/Prague', flag: '🇨🇿', displayName: '捷克时间' },
    '斯洛伐克': { timezone: 'Europe/Bratislava', flag: '🇸🇰', displayName: '斯洛伐克时间' },
    '匈牙利': { timezone: 'Europe/Budapest', flag: '🇭🇺', displayName: '匈牙利时间' },
    '斯洛文尼亚': { timezone: 'Europe/Ljubljana', flag: '🇸🇮', displayName: '斯洛文尼亚时间' },
    '克罗地亚': { timezone: 'Europe/Zagreb', flag: '🇭🇷', displayName: '克罗地亚时间' },
    '波斯尼亚和黑塞哥维那': { timezone: 'Europe/Sarajevo', flag: '🇧🇦', displayName: '波斯尼亚和黑塞哥维那时间' },
    '塞尔维亚': { timezone: 'Europe/Belgrade', flag: '🇷🇸', displayName: '塞尔维亚时间' },
    '黑山': { timezone: 'Europe/Podgorica', flag: '🇲🇪', displayName: '黑山时间' },
    '北马其顿': { timezone: 'Europe/Skopje', flag: '🇲🇰', displayName: '北马其顿时间' },
    '阿尔巴尼亚': { timezone: 'Europe/Tirane', flag: '🇦🇱', displayName: '阿尔巴尼亚时间' },
    '科索沃': { timezone: 'Europe/Pristina', flag: '🇽🇰', displayName: '科索沃时间' },
    '保加利亚': { timezone: 'Europe/Sofia', flag: '🇧🇬', displayName: '保加利亚时间' },
    '罗马尼亚': { timezone: 'Europe/Bucharest', flag: '🇷🇴', displayName: '罗马尼亚时间' },
    '摩尔多瓦': { timezone: 'Europe/Chisinau', flag: '🇲🇩', displayName: '摩尔多瓦时间' },
    '乌克兰': { timezone: 'Europe/Kiev', flag: '🇺🇦', displayName: '乌克兰时间' },
    '白俄罗斯': { timezone: 'Europe/Minsk', flag: '🇧🇾', displayName: '白俄罗斯时间' },
    '俄罗斯/加里宁格勒': { timezone: 'Europe/Kaliningrad', flag: '🇷🇺', displayName: '俄罗斯加里宁格勒时间' },
    '俄罗斯/莫斯科': { timezone: 'Europe/Moscow', flag: '🇷🇺', displayName: '俄罗斯莫斯科时间' },
    '俄罗斯/萨马拉': { timezone: 'Europe/Samara', flag: '🇷🇺', displayName: '俄罗斯萨马拉时间' },
    '俄罗斯/叶卡捷琳堡': { timezone: 'Asia/Yekaterinburg', flag: '🇷🇺', displayName: '俄罗斯叶卡捷琳堡时间' },
    '俄罗斯/新西伯利亚': { timezone: 'Asia/Novosibirsk', flag: '🇷🇺', displayName: '俄罗斯新西伯利亚时间' },
    '俄罗斯/克拉斯诺亚尔斯克': { timezone: 'Asia/Krasnoyarsk', flag: '🇷🇺', displayName: '俄罗斯克拉斯诺亚尔斯克时间' },
    '俄罗斯/伊尔库茨克': { timezone: 'Asia/Irkutsk', flag: '🇷🇺', displayName: '俄罗斯伊尔库茨克时间' },
    '俄罗斯/雅库茨克': { timezone: 'Asia/Yakutsk', flag: '🇷🇺', displayName: '俄罗斯雅库茨克时间' },
    '俄罗斯/符拉迪沃斯托克': { timezone: 'Asia/Vladivostok', flag: '🇷🇺', displayName: '俄罗斯符拉迪沃斯托克时间' },
    '俄罗斯/马加丹': { timezone: 'Asia/Magadan', flag: '🇷🇺', displayName: '俄罗斯马加丹时间' },
    '俄罗斯/堪察加': { timezone: 'Asia/Kamchatka', flag: '🇷🇺', displayName: '俄罗斯堪察加时间' },
    '格鲁吉亚': { timezone: 'Asia/Tbilisi', flag: '🇬🇪', displayName: '格鲁吉亚时间' },
    '亚美尼亚': { timezone: 'Asia/Yerevan', flag: '🇦🇲', displayName: '亚美尼亚时间' },
    '阿塞拜疆': { timezone: 'Asia/Baku', flag: '🇦🇿', displayName: '阿塞拜疆时间' },
    '土耳其': { timezone: 'Europe/Istanbul', flag: '🇹🇷', displayName: '土耳其时间' },
    '塞浦路斯': { timezone: 'Asia/Nicosia', flag: '🇨🇾', displayName: '塞浦路斯时间' },
    '希腊': { timezone: 'Europe/Athens', flag: '🇬🇷', displayName: '希腊时间' },
    
    // 非洲
    '阿尔及利亚': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '阿尔及利亚时间' },
    '突尼斯': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '突尼斯时间' },
    '利比亚': { timezone: 'Africa/Tripoli', flag: '🇱🇾', displayName: '利比亚时间' },
    '埃及': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '埃及时间' },
    '苏丹': { timezone: 'Africa/Khartoum', flag: '🇸🇩', displayName: '苏丹时间' },
    '南苏丹': { timezone: 'Africa/Juba', flag: '🇸🇸', displayName: '南苏丹时间' },
    '埃塞俄比亚': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '埃塞俄比亚时间' },
    '厄立特里亚': { timezone: 'Africa/Asmara', flag: '🇪🇷', displayName: '厄立特里亚时间' },
    '吉布提': { timezone: 'Africa/Djibouti', flag: '🇩🇯', displayName: '吉布提时间' },
    '索马里': { timezone: 'Africa/Mogadishu', flag: '🇸🇴', displayName: '索马里时间' },
    '肯尼亚': { timezone: 'Africa/Nairobi', flag: '🇰🇪', displayName: '肯尼亚时间' },
    '乌干达': { timezone: 'Africa/Kampala', flag: '🇺🇬', displayName: '乌干达时间' },
    '坦桑尼亚': { timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', displayName: '坦桑尼亚时间' },
    '卢旺达': { timezone: 'Africa/Kigali', flag: '🇷🇼', displayName: '卢旺达时间' },
    '布隆迪': { timezone: 'Africa/Bujumbura', flag: '🇧🇮', displayName: '布隆迪时间' },
    '刚果民主共和国': { timezone: 'Africa/Kinshasa', flag: '🇨🇩', displayName: '刚果民主共和国时间' },
    '刚果共和国': { timezone: 'Africa/Brazzaville', flag: '🇨🇬', displayName: '刚果共和国时间' },
    '中非': { timezone: 'Africa/Bangui', flag: '🇨🇫', displayName: '中非时间' },
    '乍得': { timezone: 'Africa/Ndjamena', flag: '🇹🇩', displayName: '乍得时间' },
    '喀麦隆': { timezone: 'Africa/Douala', flag: '🇨🇲', displayName: '喀麦隆时间' },
    '尼日利亚': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '尼日利亚时间' },
    '尼日尔': { timezone: 'Africa/Niamey', flag: '🇳🇪', displayName: '尼日尔时间' },
    '贝宁': { timezone: 'Africa/Porto-Novo', flag: '🇧🇯', displayName: '贝宁时间' },
    '多哥': { timezone: 'Africa/Lome', flag: '🇹🇬', displayName: '多哥时间' },
    '加纳': { timezone: 'Africa/Accra', flag: '🇬🇭', displayName: '加纳时间' },
    '布基纳法索': { timezone: 'Africa/Ouagadougou', flag: '🇧🇫', displayName: '布基纳法索时间' },
    '马里': { timezone: 'Africa/Bamako', flag: '🇲🇱', displayName: '马里时间' },
    '塞内加尔': { timezone: 'Africa/Dakar', flag: '🇸🇳', displayName: '塞内加尔时间' },
    '冈比亚': { timezone: 'Africa/Banjul', flag: '🇬🇲', displayName: '冈比亚时间' },
    '几内亚比绍': { timezone: 'Africa/Bissau', flag: '🇬🇼', displayName: '几内亚比绍时间' },
    '几内亚': { timezone: 'Africa/Conakry', flag: '🇬🇳', displayName: '几内亚时间' },
    '塞拉利昂': { timezone: 'Africa/Freetown', flag: '🇸🇱', displayName: '塞拉利昂时间' },
    '利比里亚': { timezone: 'Africa/Monrovia', flag: '🇱🇷', displayName: '利比里亚时间' },
    '科特迪瓦': { timezone: 'Africa/Abidjan', flag: '🇨🇮', displayName: '科特迪瓦时间' },
    '加蓬': { timezone: 'Africa/Libreville', flag: '🇬🇦', displayName: '加蓬时间' },
    '赤道几内亚': { timezone: 'Africa/Malabo', flag: '🇬🇶', displayName: '赤道几内亚时间' },
    '圣多美和普林西比': { timezone: 'Africa/Sao_Tome', flag: '🇸🇹', displayName: '圣多美和普林西比时间' },
    '安哥拉': { timezone: 'Africa/Luanda', flag: '🇦🇴', displayName: '安哥拉时间' },
    '赞比亚': { timezone: 'Africa/Lusaka', flag: '🇿🇲', displayName: '赞比亚时间' },
    '津巴布韦': { timezone: 'Africa/Harare', flag: '🇿🇼', displayName: '津巴布韦时间' },
    '博茨瓦纳': { timezone: 'Africa/Gaborone', flag: '🇧🇼', displayName: '博茨瓦纳时间' },
    '纳米比亚': { timezone: 'Africa/Windhoek', flag: '🇳🇦', displayName: '纳米比亚时间' },
    '南非': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '南非时间' },
    '莱索托': { timezone: 'Africa/Maseru', flag: '🇱🇸', displayName: '莱索托时间' },
    '斯威士兰': { timezone: 'Africa/Mbabane', flag: '🇸🇿', displayName: '斯威士兰时间' },
    '马达加斯加': { timezone: 'Indian/Antananarivo', flag: '🇲🇬', displayName: '马达加斯加时间' },
    '毛里求斯': { timezone: 'Indian/Mauritius', flag: '🇲🇺', displayName: '毛里求斯时间' },
    '塞舌尔': { timezone: 'Indian/Mahe', flag: '🇸🇨', displayName: '塞舌尔时间' },
    '科摩罗': { timezone: 'Indian/Comoro', flag: '🇰🇲', displayName: '科摩罗时间' },
    '马约特': { timezone: 'Indian/Mayotte', flag: '🇾🇹', displayName: '马约特时间' },
    '留尼汪': { timezone: 'Indian/Reunion', flag: '🇷🇪', displayName: '留尼汪时间' },
    '圣赫勒拿': { timezone: 'Atlantic/St_Helena', flag: '🇸🇭', displayName: '圣赫勒拿时间' },
    '阿森松岛': { timezone: 'Atlantic/Ascension', flag: '🇦🇨', displayName: '阿森松岛时间' },
    '特里斯坦-达库尼亚': { timezone: 'Atlantic/Tristan_da_Cunha', flag: '🇹🇦', displayName: '特里斯坦-达库尼亚时间' },
    
    // 中东地区
    '沙特阿拉伯': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '沙特阿拉伯时间' },
    '阿联酋': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '阿联酋时间' },
    '卡塔尔': { timezone: 'Asia/Qatar', flag: '🇶🇦', displayName: '卡塔尔时间' },
    '巴林': { timezone: 'Asia/Bahrain', flag: '🇧🇭', displayName: '巴林时间' },
    '科威特': { timezone: 'Asia/Kuwait', flag: '🇰🇼', displayName: '科威特时间' },
    '阿曼': { timezone: 'Asia/Muscat', flag: '🇴🇲', displayName: '阿曼时间' },
    '也门': { timezone: 'Asia/Aden', flag: '🇾🇪', displayName: '也门时间' },
    '伊拉克': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '伊拉克时间' },
    '伊朗': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '伊朗时间' },
    '以色列': { timezone: 'Asia/Jerusalem', flag: '🇮🇱', displayName: '以色列时间' },
    '巴勒斯坦': { timezone: 'Asia/Gaza', flag: '🇵🇸', displayName: '巴勒斯坦时间' },
    '约旦': { timezone: 'Asia/Amman', flag: '🇯🇴', displayName: '约旦时间' },
    '黎巴嫩': { timezone: 'Asia/Beirut', flag: '🇱🇧', displayName: '黎巴嫩时间' },
    '叙利亚': { timezone: 'Asia/Damascus', flag: '🇸🇾', displayName: '叙利亚时间' },
    
    // 其他地区
    '格陵兰': { timezone: 'America/Godthab', flag: '🇬🇱', displayName: '格陵兰时间' },
    '法罗群岛': { timezone: 'Atlantic/Faroe', flag: '🇫🇴', displayName: '法罗群岛时间' },
    '斯瓦尔巴群岛': { timezone: 'Arctic/Longyearbyen', flag: '🇸🇯', displayName: '斯瓦尔巴群岛时间' },
    '扬马延岛': { timezone: 'Arctic/Jan_Mayen', flag: '🇳🇴', displayName: '扬马延岛时间' },
    '布韦岛': { timezone: 'Antarctica/Bouvet', flag: '🇧🇻', displayName: '布韦岛时间' },
    '南乔治亚岛': { timezone: 'Atlantic/South_Georgia', flag: '🇬🇸', displayName: '南乔治亚岛时间' },
    '福克兰群岛': { timezone: 'Atlantic/Stanley', flag: '🇫🇰', displayName: '福克兰群岛时间' },
    '南桑威奇群岛': { timezone: 'Atlantic/South_Sandwich', flag: '🇬🇸', displayName: '南桑威奇群岛时间' },
    '南极洲': { timezone: 'Antarctica/McMurdo', flag: '🇦🇶', displayName: '南极洲时间' },
    '南极点': { timezone: 'Antarctica/South_Pole', flag: '🇦🇶', displayName: '南极点时间' },
    '北极点': { timezone: 'Arctic/North_Pole', flag: '🇦🇶', displayName: '北极点时间' },
    
    // 主要城市 - 亚洲
    '北京': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '北京', city: true },
    '上海': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '上海', city: true },
    '广州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '广州', city: true },
    '深圳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '深圳', city: true },
    '香港': { timezone: 'Asia/Hong_Kong', flag: '🇭🇰', displayName: '香港', city: true },
    '台北': { timezone: 'Asia/Taipei', flag: '🇹🇼', displayName: '台北', city: true },
    '东京': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '东京', city: true },
    '大阪': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '大阪', city: true },
    '首尔': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '首尔', city: true },
    '新加坡': { timezone: 'Asia/Singapore', flag: '🇸🇬', displayName: '新加坡', city: true },
    '曼谷': { timezone: 'Asia/Bangkok', flag: '🇹🇭', displayName: '曼谷', city: true },
    '吉隆坡': { timezone: 'Asia/Kuala_Lumpur', flag: '🇲🇾', displayName: '吉隆坡', city: true },
    '雅加达': { timezone: 'Asia/Jakarta', flag: '🇮🇩', displayName: '雅加达', city: true },
    '马尼拉': { timezone: 'Asia/Manila', flag: '🇵🇭', displayName: '马尼拉', city: true },
    '胡志明市': { timezone: 'Asia/Ho_Chi_Minh', flag: '🇻🇳', displayName: '胡志明市', city: true },
    '河内': { timezone: 'Asia/Ho_Chi_Minh', flag: '🇻🇳', displayName: '河内', city: true },
    '新德里': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '新德里', city: true },
    '孟买': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '孟买', city: true },
    '班加罗尔': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '班加罗尔', city: true },
    '迪拜': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '迪拜', city: true },
    '多哈': { timezone: 'Asia/Qatar', flag: '🇶🇦', displayName: '多哈', city: true },
    '利雅得': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '利雅得', city: true },
    '特拉维夫': { timezone: 'Asia/Jerusalem', flag: '🇮🇱', displayName: '特拉维夫', city: true },
    '伊斯坦布尔': { timezone: 'Europe/Istanbul', flag: '🇹🇷', displayName: '伊斯坦布尔', city: true },
    '莫斯科': { timezone: 'Europe/Moscow', flag: '🇷🇺', displayName: '莫斯科', city: true },
    '圣彼得堡': { timezone: 'Europe/Moscow', flag: '🇷🇺', displayName: '圣彼得堡', city: true },
    
    // 主要城市 - 欧洲
    '伦敦': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '伦敦', city: true },
    '巴黎': { timezone: 'Europe/Paris', flag: '🇫🇷', displayName: '巴黎', city: true },
    '柏林': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '柏林', city: true },
    '法兰克福': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '法兰克福', city: true },
    '慕尼黑': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '慕尼黑', city: true },
    '罗马': { timezone: 'Europe/Rome', flag: '🇮🇹', displayName: '罗马', city: true },
    '米兰': { timezone: 'Europe/Rome', flag: '🇮🇹', displayName: '米兰', city: true },
    '马德里': { timezone: 'Europe/Madrid', flag: '🇪🇸', displayName: '马德里', city: true },
    '巴塞罗那': { timezone: 'Europe/Madrid', flag: '🇪🇸', displayName: '巴塞罗那', city: true },
    '阿姆斯特丹': { timezone: 'Europe/Amsterdam', flag: '🇳🇱', displayName: '阿姆斯特丹', city: true },
    '布鲁塞尔': { timezone: 'Europe/Brussels', flag: '🇧🇪', displayName: '布鲁塞尔', city: true },
    '苏黎世': { timezone: 'Europe/Zurich', flag: '🇨🇭', displayName: '苏黎世', city: true },
    '维也纳': { timezone: 'Europe/Vienna', flag: '🇦🇹', displayName: '维也纳', city: true },
    '斯德哥尔摩': { timezone: 'Europe/Stockholm', flag: '🇸🇪', displayName: '斯德哥尔摩', city: true },
    '哥本哈根': { timezone: 'Europe/Copenhagen', flag: '🇩🇰', displayName: '哥本哈根', city: true },
    '奥斯陆': { timezone: 'Europe/Oslo', flag: '🇳🇴', displayName: '奥斯陆', city: true },
    '赫尔辛基': { timezone: 'Europe/Helsinki', flag: '🇫🇮', displayName: '赫尔辛基', city: true },
    '华沙': { timezone: 'Europe/Warsaw', flag: '🇵🇱', displayName: '华沙', city: true },
    '布拉格': { timezone: 'Europe/Prague', flag: '🇨🇿', displayName: '布拉格', city: true },
    '布达佩斯': { timezone: 'Europe/Budapest', flag: '🇭🇺', displayName: '布达佩斯', city: true },
    '里斯本': { timezone: 'Europe/Lisbon', flag: '🇵🇹', displayName: '里斯本', city: true },
    '都柏林': { timezone: 'Europe/Dublin', flag: '🇮🇪', displayName: '都柏林', city: true },
    '雅典': { timezone: 'Europe/Athens', flag: '🇬🇷', displayName: '雅典', city: true },
    '基辅': { timezone: 'Europe/Kiev', flag: '🇺🇦', displayName: '基辅', city: true },
    
    // 主要城市 - 北美洲
    '纽约': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '纽约', city: true },
    '洛杉矶': { timezone: 'America/Los_Angeles', flag: '🇺🇸', displayName: '洛杉矶', city: true },
    '芝加哥': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '芝加哥', city: true },
    '休斯顿': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '休斯顿', city: true },
    '旧金山': { timezone: 'America/Los_Angeles', flag: '🇺🇸', displayName: '旧金山', city: true },
    '西雅图': { timezone: 'America/Los_Angeles', flag: '🇺🇸', displayName: '西雅图', city: true },
    '波士顿': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '波士顿', city: true },
    '迈阿密': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '迈阿密', city: true },
    '华盛顿特区': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '华盛顿特区 (Washington DC)', city: true },
    '华盛顿州': { timezone: 'America/Los_Angeles', flag: '🇺🇸', displayName: '华盛顿州 (Washington State)', city: true },
    '多伦多': { timezone: 'America/Toronto', flag: '🇨🇦', displayName: '多伦多', city: true },
    '温哥华': { timezone: 'America/Vancouver', flag: '🇨🇦', displayName: '温哥华', city: true },
    '蒙特利尔': { timezone: 'America/Toronto', flag: '🇨🇦', displayName: '蒙特利尔', city: true },
    '墨西哥城': { timezone: 'America/Mexico_City', flag: '🇲🇽', displayName: '墨西哥城', city: true },
    '坎昆': { timezone: 'America/Cancun', flag: '🇲🇽', displayName: '坎昆', city: true },
    
    // 主要城市 - 南美洲
    '圣保罗': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '圣保罗', city: true },
    '里约热内卢': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '里约热内卢', city: true },
    '布宜诺斯艾利斯': { timezone: 'America/Argentina/Buenos_Aires', flag: '🇦🇷', displayName: '布宜诺斯艾利斯', city: true },
    '圣地亚哥': { timezone: 'America/Santiago', flag: '🇨🇱', displayName: '圣地亚哥', city: true },
    '利马': { timezone: 'America/Lima', flag: '🇵🇪', displayName: '利马', city: true },
    '波哥大': { timezone: 'America/Bogota', flag: '🇨🇴', displayName: '波哥大', city: true },
    
    // 主要城市 - 非洲
    '开罗': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '开罗', city: true },
    '约翰内斯堡': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '约翰内斯堡', city: true },
    '开普敦': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '开普敦', city: true },
    '拉各斯': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '拉各斯', city: true },
    '内罗毕': { timezone: 'Africa/Nairobi', flag: '🇰🇪', displayName: '内罗毕', city: true },
    
    // 主要城市 - 大洋洲
    '悉尼': { timezone: 'Australia/Sydney', flag: '🇦🇺', displayName: '悉尼', city: true },
    '墨尔本': { timezone: 'Australia/Sydney', flag: '🇦🇺', displayName: '墨尔本', city: true },
    '布里斯班': { timezone: 'Australia/Sydney', flag: '🇦🇺', displayName: '布里斯班', city: true },
    '珀斯': { timezone: 'Australia/Perth', flag: '🇦🇺', displayName: '珀斯', city: true },
    '奥克兰': { timezone: 'Pacific/Auckland', flag: '🇳🇿', displayName: '奥克兰', city: true },
    '惠灵顿': { timezone: 'Pacific/Auckland', flag: '🇳🇿', displayName: '惠灵顿', city: true },
    
    // 更多中国城市
    '成都': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '成都', city: true },
    '杭州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '杭州', city: true },
    '南京': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '南京', city: true },
    '武汉': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '武汉', city: true },
    '西安': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '西安', city: true },
    '重庆': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '重庆', city: true },
    '天津': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '天津', city: true },
    '苏州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '苏州', city: true },
    '青岛': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '青岛', city: true },
    '大连': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '大连', city: true },
    '厦门': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '厦门', city: true },
    '昆明': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '昆明', city: true },
    '长沙': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '长沙', city: true },
    '郑州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '郑州', city: true },
    '济南': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '济南', city: true },
    '合肥': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '合肥', city: true },
    '福州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '福州', city: true },
    '石家庄': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '石家庄', city: true },
    '哈尔滨': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '哈尔滨', city: true },
    '长春': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '长春', city: true },
    '沈阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '沈阳', city: true },
    '乌鲁木齐': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '乌鲁木齐', city: true },
    '拉萨': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '拉萨', city: true },
    '澳门': { timezone: 'Asia/Macau', flag: '🇲🇴', displayName: '澳门', city: true },
    
    // 更多日本城市
    '横滨': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '横滨', city: true },
    '名古屋': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '名古屋', city: true },
    '京都': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '京都', city: true },
    '神户': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '神户', city: true },
    '福冈': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '福冈', city: true },
    '札幌': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '札幌', city: true },
    
    // 更多韩国城市
    '釜山': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '釜山', city: true },
    '大邱': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '大邱', city: true },
    '仁川': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '仁川', city: true },
    
    // 更多印度城市
    '班加罗尔': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '班加罗尔', city: true },
    '海德拉巴': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '海德拉巴', city: true },
    '金奈': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '金奈', city: true },
    '加尔各答': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '加尔各答', city: true },
    '浦那': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '浦那', city: true },
    '艾哈迈达巴德': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '艾哈迈达巴德', city: true },
    
    // 更多东南亚城市
    '河内': { timezone: 'Asia/Ho_Chi_Minh', flag: '🇻🇳', displayName: '河内', city: true },
    '雅加达': { timezone: 'Asia/Jakarta', flag: '🇮🇩', displayName: '雅加达', city: true },
    '泗水': { timezone: 'Asia/Jakarta', flag: '🇮🇩', displayName: '泗水', city: true },
    '万隆': { timezone: 'Asia/Jakarta', flag: '🇮🇩', displayName: '万隆', city: true },
    '清迈': { timezone: 'Asia/Bangkok', flag: '🇹🇭', displayName: '清迈', city: true },
    '普吉': { timezone: 'Asia/Bangkok', flag: '🇹🇭', displayName: '普吉', city: true },
    '槟城': { timezone: 'Asia/Kuala_Lumpur', flag: '🇲🇾', displayName: '槟城', city: true },
    '宿务': { timezone: 'Asia/Manila', flag: '🇵🇭', displayName: '宿务', city: true },
    
    // 更多中东城市
    '阿布扎比': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '阿布扎比', city: true },
    '沙迦': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '沙迦', city: true },
    '科威特城': { timezone: 'Asia/Kuwait', flag: '🇰🇼', displayName: '科威特城', city: true },
    '麦纳麦': { timezone: 'Asia/Bahrain', flag: '🇧🇭', displayName: '麦纳麦', city: true },
    '马斯喀特': { timezone: 'Asia/Muscat', flag: '🇴🇲', displayName: '马斯喀特', city: true },
    '安曼': { timezone: 'Asia/Amman', flag: '🇯🇴', displayName: '安曼', city: true },
    '贝鲁特': { timezone: 'Asia/Beirut', flag: '🇱🇧', displayName: '贝鲁特', city: true },
    '大马士革': { timezone: 'Asia/Damascus', flag: '🇸🇾', displayName: '大马士革', city: true },
    '德黑兰': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '德黑兰', city: true },
    '巴格达': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '巴格达', city: true },
    
    // 更多美国城市
    '费城': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '费城', city: true },
    '亚特兰大': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '亚特兰大', city: true },
    '底特律': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '底特律', city: true },
    '达拉斯': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '达拉斯', city: true },
    '凤凰城': { timezone: 'America/Phoenix', flag: '🇺🇸', displayName: '凤凰城', city: true },
    '丹佛': { timezone: 'America/Denver', flag: '🇺🇸', displayName: '丹佛', city: true },
    '拉斯维加斯': { timezone: 'America/Los_Angeles', flag: '🇺🇸', displayName: '拉斯维加斯', city: true },
    '圣地亚哥': { timezone: 'America/Los_Angeles', flag: '🇺🇸', displayName: '圣地亚哥', city: true },
    '波特兰': { timezone: 'America/Los_Angeles', flag: '🇺🇸', displayName: '波特兰', city: true },
    '新奥尔良': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '新奥尔良', city: true },
    '明尼阿波利斯': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '明尼阿波利斯', city: true },
    '堪萨斯城': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '堪萨斯城', city: true },
    '圣路易斯': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '圣路易斯', city: true },
    '匹兹堡': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '匹兹堡', city: true },
    '夏洛特': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '夏洛特', city: true },
    '巴尔的摩': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '巴尔的摩', city: true },
    '坦帕': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '坦帕', city: true },
    '奥兰多': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '奥兰多', city: true },
    '圣安东尼奥': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '圣安东尼奥', city: true },
    '奥斯汀': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '奥斯汀', city: true },
    '杰克逊维尔': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '杰克逊维尔', city: true },
    '哥伦布': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '哥伦布', city: true },
    '夏威夷': { timezone: 'Pacific/Honolulu', flag: '🇺🇸', displayName: '夏威夷', city: true },
    '火奴鲁鲁': { timezone: 'Pacific/Honolulu', flag: '🇺🇸', displayName: '火奴鲁鲁', city: true },
    
    // 更多加拿大城市
    '渥太华': { timezone: 'America/Toronto', flag: '🇨🇦', displayName: '渥太华', city: true },
    '卡尔加里': { timezone: 'America/Edmonton', flag: '🇨🇦', displayName: '卡尔加里', city: true },
    '埃德蒙顿': { timezone: 'America/Edmonton', flag: '🇨🇦', displayName: '埃德蒙顿', city: true },
    '温尼伯': { timezone: 'America/Winnipeg', flag: '🇨🇦', displayName: '温尼伯', city: true },
    '魁北克': { timezone: 'America/Toronto', flag: '🇨🇦', displayName: '魁北克', city: true },
    '哈利法克斯': { timezone: 'America/Halifax', flag: '🇨🇦', displayName: '哈利法克斯', city: true },
    
    // 更多欧洲城市
    '曼彻斯特': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '曼彻斯特', city: true },
    '利物浦': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '利物浦', city: true },
    '爱丁堡': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '爱丁堡', city: true },
    '格拉斯哥': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '格拉斯哥', city: true },
    '伯明翰': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '伯明翰', city: true },
    '里昂': { timezone: 'Europe/Paris', flag: '🇫🇷', displayName: '里昂', city: true },
    '马赛': { timezone: 'Europe/Paris', flag: '🇫🇷', displayName: '马赛', city: true },
    '图卢兹': { timezone: 'Europe/Paris', flag: '🇫🇷', displayName: '图卢兹', city: true },
    '尼斯': { timezone: 'Europe/Paris', flag: '🇫🇷', displayName: '尼斯', city: true },
    '汉堡': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '汉堡', city: true },
    '科隆': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '科隆', city: true },
    '斯图加特': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '斯图加特', city: true },
    '杜塞尔多夫': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '杜塞尔多夫', city: true },
    '多特蒙德': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '多特蒙德', city: true },
    '那不勒斯': { timezone: 'Europe/Rome', flag: '🇮🇹', displayName: '那不勒斯', city: true },
    '都灵': { timezone: 'Europe/Rome', flag: '🇮🇹', displayName: '都灵', city: true },
    '佛罗伦萨': { timezone: 'Europe/Rome', flag: '🇮🇹', displayName: '佛罗伦萨', city: true },
    '威尼斯': { timezone: 'Europe/Rome', flag: '🇮🇹', displayName: '威尼斯', city: true },
    '瓦伦西亚': { timezone: 'Europe/Madrid', flag: '🇪🇸', displayName: '瓦伦西亚', city: true },
    '塞维利亚': { timezone: 'Europe/Madrid', flag: '🇪🇸', displayName: '塞维利亚', city: true },
    '毕尔巴鄂': { timezone: 'Europe/Madrid', flag: '🇪🇸', displayName: '毕尔巴鄂', city: true },
    '鹿特丹': { timezone: 'Europe/Amsterdam', flag: '🇳🇱', displayName: '鹿特丹', city: true },
    '海牙': { timezone: 'Europe/Amsterdam', flag: '🇳🇱', displayName: '海牙', city: true },
    '安特卫普': { timezone: 'Europe/Brussels', flag: '🇧🇪', displayName: '安特卫普', city: true },
    '日内瓦': { timezone: 'Europe/Zurich', flag: '🇨🇭', displayName: '日内瓦', city: true },
    '巴塞尔': { timezone: 'Europe/Zurich', flag: '🇨🇭', displayName: '巴塞尔', city: true },
    '萨尔茨堡': { timezone: 'Europe/Vienna', flag: '🇦🇹', displayName: '萨尔茨堡', city: true },
    '哥德堡': { timezone: 'Europe/Stockholm', flag: '🇸🇪', displayName: '哥德堡', city: true },
    '马尔默': { timezone: 'Europe/Stockholm', flag: '🇸🇪', displayName: '马尔默', city: true },
    '奥胡斯': { timezone: 'Europe/Copenhagen', flag: '🇩🇰', displayName: '奥胡斯', city: true },
    '卑尔根': { timezone: 'Europe/Oslo', flag: '🇳🇴', displayName: '卑尔根', city: true },
    '坦佩雷': { timezone: 'Europe/Helsinki', flag: '🇫🇮', displayName: '坦佩雷', city: true },
    '克拉科夫': { timezone: 'Europe/Warsaw', flag: '🇵🇱', displayName: '克拉科夫', city: true },
    '格但斯克': { timezone: 'Europe/Warsaw', flag: '🇵🇱', displayName: '格但斯克', city: true },
    '布尔诺': { timezone: 'Europe/Prague', flag: '🇨🇿', displayName: '布尔诺', city: true },
    '德布勒森': { timezone: 'Europe/Budapest', flag: '🇭🇺', displayName: '德布勒森', city: true },
    '波尔图': { timezone: 'Europe/Lisbon', flag: '🇵🇹', displayName: '波尔图', city: true },
    '科克': { timezone: 'Europe/Dublin', flag: '🇮🇪', displayName: '科克', city: true },
    '塞萨洛尼基': { timezone: 'Europe/Athens', flag: '🇬🇷', displayName: '塞萨洛尼基', city: true },
    '敖德萨': { timezone: 'Europe/Kiev', flag: '🇺🇦', displayName: '敖德萨', city: true },
    '哈尔科夫': { timezone: 'Europe/Kiev', flag: '🇺🇦', displayName: '哈尔科夫', city: true },
    '明斯克': { timezone: 'Europe/Minsk', flag: '🇧🇾', displayName: '明斯克', city: true },
    '叶卡捷琳堡': { timezone: 'Asia/Yekaterinburg', flag: '🇷🇺', displayName: '叶卡捷琳堡', city: true },
    '新西伯利亚': { timezone: 'Asia/Novosibirsk', flag: '🇷🇺', displayName: '新西伯利亚', city: true },
    '符拉迪沃斯托克': { timezone: 'Asia/Vladivostok', flag: '🇷🇺', displayName: '符拉迪沃斯托克', city: true },
    '喀山': { timezone: 'Europe/Moscow', flag: '🇷🇺', displayName: '喀山', city: true },
    '下诺夫哥罗德': { timezone: 'Europe/Moscow', flag: '🇷🇺', displayName: '下诺夫哥罗德', city: true },
    '萨马拉': { timezone: 'Europe/Samara', flag: '🇷🇺', displayName: '萨马拉', city: true },
    
    // 更多南美洲城市
    '里约热内卢': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '里约热内卢', city: true },
    '巴西利亚': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '巴西利亚', city: true },
    '库里蒂巴': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '库里蒂巴', city: true },
    '贝洛奥里藏特': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '贝洛奥里藏特', city: true },
    '罗萨里奥': { timezone: 'America/Argentina/Buenos_Aires', flag: '🇦🇷', displayName: '罗萨里奥', city: true },
    '科尔多瓦': { timezone: 'America/Argentina/Buenos_Aires', flag: '🇦🇷', displayName: '科尔多瓦', city: true },
    '瓦尔帕莱索': { timezone: 'America/Santiago', flag: '🇨🇱', displayName: '瓦尔帕莱索', city: true },
    '麦德林': { timezone: 'America/Bogota', flag: '🇨🇴', displayName: '麦德林', city: true },
    '卡利': { timezone: 'America/Bogota', flag: '🇨🇴', displayName: '卡利', city: true },
    '瓜亚基尔': { timezone: 'America/Guayaquil', flag: '🇪🇨', displayName: '瓜亚基尔', city: true },
    '基多': { timezone: 'America/Guayaquil', flag: '🇪🇨', displayName: '基多', city: true },
    '加拉加斯': { timezone: 'America/Caracas', flag: '🇻🇪', displayName: '加拉加斯', city: true },
    '蒙得维的亚': { timezone: 'America/Montevideo', flag: '🇺🇾', displayName: '蒙得维的亚', city: true },
    '亚松森': { timezone: 'America/Asuncion', flag: '🇵🇾', displayName: '亚松森', city: true },
    '拉巴斯': { timezone: 'America/La_Paz', flag: '🇧🇴', displayName: '拉巴斯', city: true },
    '库斯科': { timezone: 'America/Lima', flag: '🇵🇪', displayName: '库斯科', city: true },
    
    // 更多非洲城市
    '开普敦': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '开普敦', city: true },
    '比勒陀利亚': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '比勒陀利亚', city: true },
    '德班': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '德班', city: true },
    '亚历山大': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '亚历山大', city: true },
    '吉萨': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '吉萨', city: true },
    '阿布贾': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '阿布贾', city: true },
    '卡诺': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '卡诺', city: true },
    '伊巴丹': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '伊巴丹', city: true },
    '达累斯萨拉姆': { timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', displayName: '达累斯萨拉姆', city: true },
    '坎帕拉': { timezone: 'Africa/Kampala', flag: '🇺🇬', displayName: '坎帕拉', city: true },
    '金沙萨': { timezone: 'Africa/Kinshasa', flag: '🇨🇩', displayName: '金沙萨', city: true },
    '卢本巴希': { timezone: 'Africa/Lubumbashi', flag: '🇨🇩', displayName: '卢本巴希', city: true },
    '卡萨布兰卡': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '卡萨布兰卡', city: true },
    '拉巴特': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '拉巴特', city: true },
    '突尼斯': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '突尼斯', city: true },
    '阿尔及尔': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '阿尔及尔', city: true },
    '达喀尔': { timezone: 'Africa/Dakar', flag: '🇸🇳', displayName: '达喀尔', city: true },
    '阿比让': { timezone: 'Africa/Abidjan', flag: '🇨🇮', displayName: '阿比让', city: true },
    '阿克拉': { timezone: 'Africa/Accra', flag: '🇬🇭', displayName: '阿克拉', city: true },
    '亚的斯亚贝巴': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '亚的斯亚贝巴', city: true },
    '达累斯萨拉姆': { timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', displayName: '达累斯萨拉姆', city: true },
    '罗安达': { timezone: 'Africa/Luanda', flag: '🇦🇴', displayName: '罗安达', city: true },
    '哈拉雷': { timezone: 'Africa/Harare', flag: '🇿🇼', displayName: '哈拉雷', city: true },
    '卢萨卡': { timezone: 'Africa/Lusaka', flag: '🇿🇲', displayName: '卢萨卡', city: true },
    
    // 更多大洋洲城市
    '阿德莱德': { timezone: 'Australia/Adelaide', flag: '🇦🇺', displayName: '阿德莱德', city: true },
    '达尔文': { timezone: 'Australia/Darwin', flag: '🇦🇺', displayName: '达尔文', city: true },
    '霍巴特': { timezone: 'Australia/Hobart', flag: '🇦🇺', displayName: '霍巴特', city: true },
    '堪培拉': { timezone: 'Australia/Sydney', flag: '🇦🇺', displayName: '堪培拉', city: true },
    '黄金海岸': { timezone: 'Australia/Sydney', flag: '🇦🇺', displayName: '黄金海岸', city: true },
    '纽卡斯尔': { timezone: 'Australia/Sydney', flag: '🇦🇺', displayName: '纽卡斯尔', city: true },
    '克赖斯特彻奇': { timezone: 'Pacific/Auckland', flag: '🇳🇿', displayName: '克赖斯特彻奇', city: true },
    '达尼丁': { timezone: 'Pacific/Auckland', flag: '🇳🇿', displayName: '达尼丁', city: true },
    
    // 更多中美洲和加勒比城市
    '哈瓦那': { timezone: 'America/Havana', flag: '🇨🇺', displayName: '哈瓦那', city: true },
    '金斯敦': { timezone: 'America/Jamaica', flag: '🇯🇲', displayName: '金斯敦', city: true },
    '太子港': { timezone: 'America/Port-au-Prince', flag: '🇭🇹', displayName: '太子港', city: true },
    '圣多明各': { timezone: 'America/Santo_Domingo', flag: '🇩🇴', displayName: '圣多明各', city: true },
    '圣胡安': { timezone: 'America/Puerto_Rico', flag: '🇵🇷', displayName: '圣胡安', city: true },
    '拿骚': { timezone: 'America/Nassau', flag: '🇧🇸', displayName: '拿骚', city: true },
    '布里奇敦': { timezone: 'America/Barbados', flag: '🇧🇧', displayName: '布里奇敦', city: true },
    '危地马拉城': { timezone: 'America/Guatemala', flag: '🇬🇹', displayName: '危地马拉城', city: true },
    '圣萨尔瓦多': { timezone: 'America/El_Salvador', flag: '🇸🇻', displayName: '圣萨尔瓦多', city: true },
    '特古西加尔巴': { timezone: 'America/Tegucigalpa', flag: '🇭🇳', displayName: '特古西加尔巴', city: true },
    '马那瓜': { timezone: 'America/Managua', flag: '🇳🇮', displayName: '马那瓜', city: true },
    '圣何塞': { timezone: 'America/Costa_Rica', flag: '🇨🇷', displayName: '圣何塞', city: true },
    '巴拿马城': { timezone: 'America/Panama', flag: '🇵🇦', displayName: '巴拿马城', city: true },
    
    // 更多墨西哥城市
    '瓜达拉哈拉': { timezone: 'America/Mexico_City', flag: '🇲🇽', displayName: '瓜达拉哈拉', city: true },
    '蒙特雷': { timezone: 'America/Monterrey', flag: '🇲🇽', displayName: '蒙特雷', city: true },
    '普埃布拉': { timezone: 'America/Mexico_City', flag: '🇲🇽', displayName: '普埃布拉', city: true },
    '蒂华纳': { timezone: 'America/Tijuana', flag: '🇲🇽', displayName: '蒂华纳', city: true },
    
    // 更多重要城市补充（第二批）
    '河内': { timezone: 'Asia/Ho_Chi_Minh', flag: '🇻🇳', displayName: '河内', city: true },
    '泗水': { timezone: 'Asia/Jakarta', flag: '🇮🇩', displayName: '泗水', city: true },
    '万隆': { timezone: 'Asia/Jakarta', flag: '🇮🇩', displayName: '万隆', city: true },
    '清迈': { timezone: 'Asia/Bangkok', flag: '🇹🇭', displayName: '清迈', city: true },
    '普吉': { timezone: 'Asia/Bangkok', flag: '🇹🇭', displayName: '普吉', city: true },
    '槟城': { timezone: 'Asia/Kuala_Lumpur', flag: '🇲🇾', displayName: '槟城', city: true },
    '宿务': { timezone: 'Asia/Manila', flag: '🇵🇭', displayName: '宿务', city: true },
    '阿布扎比': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '阿布扎比', city: true },
    '沙迦': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '沙迦', city: true },
    '科威特城': { timezone: 'Asia/Kuwait', flag: '🇰🇼', displayName: '科威特城', city: true },
    '麦纳麦': { timezone: 'Asia/Bahrain', flag: '🇧🇭', displayName: '麦纳麦', city: true },
    '马斯喀特': { timezone: 'Asia/Muscat', flag: '🇴🇲', displayName: '马斯喀特', city: true },
    '安曼': { timezone: 'Asia/Amman', flag: '🇯🇴', displayName: '安曼', city: true },
    '贝鲁特': { timezone: 'Asia/Beirut', flag: '🇱🇧', displayName: '贝鲁特', city: true },
    '大马士革': { timezone: 'Asia/Damascus', flag: '🇸🇾', displayName: '大马士革', city: true },
    '德黑兰': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '德黑兰', city: true },
    '巴格达': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '巴格达', city: true },
    '利雅得': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '利雅得', city: true },
    '吉达': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '吉达', city: true },
    '麦加': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '麦加', city: true },
    '麦地那': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '麦地那', city: true },
    '达曼': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '达曼', city: true },
    '科伦坡': { timezone: 'Asia/Colombo', flag: '🇱🇰', displayName: '科伦坡', city: true },
    '达卡': { timezone: 'Asia/Dhaka', flag: '🇧🇩', displayName: '达卡', city: true },
    '卡拉奇': { timezone: 'Asia/Karachi', flag: '🇵🇰', displayName: '卡拉奇', city: true },
    '拉合尔': { timezone: 'Asia/Karachi', flag: '🇵🇰', displayName: '拉合尔', city: true },
    '伊斯兰堡': { timezone: 'Asia/Karachi', flag: '🇵🇰', displayName: '伊斯兰堡', city: true },
    '加德满都': { timezone: 'Asia/Kathmandu', flag: '🇳🇵', displayName: '加德满都', city: true },
    '海德拉巴': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '海德拉巴', city: true },
    '金奈': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '金奈', city: true },
    '加尔各答': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '加尔各答', city: true },
    '浦那': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '浦那', city: true },
    '艾哈迈达巴德': { timezone: 'Asia/Kolkata', flag: '🇮🇳', displayName: '艾哈迈达巴德', city: true },
    '横滨': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '横滨', city: true },
    '名古屋': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '名古屋', city: true },
    '京都': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '京都', city: true },
    '神户': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '神户', city: true },
    '福冈': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '福冈', city: true },
    '札幌': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '札幌', city: true },
    '釜山': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '釜山', city: true },
    '大邱': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '大邱', city: true },
    '仁川': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '仁川', city: true },
    '曼彻斯特': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '曼彻斯特', city: true },
    '利物浦': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '利物浦', city: true },
    '爱丁堡': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '爱丁堡', city: true },
    '格拉斯哥': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '格拉斯哥', city: true },
    '伯明翰': { timezone: 'Europe/London', flag: '🇬🇧', displayName: '伯明翰', city: true },
    '里昂': { timezone: 'Europe/Paris', flag: '🇫🇷', displayName: '里昂', city: true },
    '马赛': { timezone: 'Europe/Paris', flag: '🇫🇷', displayName: '马赛', city: true },
    '图卢兹': { timezone: 'Europe/Paris', flag: '🇫🇷', displayName: '图卢兹', city: true },
    '尼斯': { timezone: 'Europe/Paris', flag: '🇫🇷', displayName: '尼斯', city: true },
    '汉堡': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '汉堡', city: true },
    '科隆': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '科隆', city: true },
    '斯图加特': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '斯图加特', city: true },
    '杜塞尔多夫': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '杜塞尔多夫', city: true },
    '多特蒙德': { timezone: 'Europe/Berlin', flag: '🇩🇪', displayName: '多特蒙德', city: true },
    '那不勒斯': { timezone: 'Europe/Rome', flag: '🇮🇹', displayName: '那不勒斯', city: true },
    '都灵': { timezone: 'Europe/Rome', flag: '🇮🇹', displayName: '都灵', city: true },
    '佛罗伦萨': { timezone: 'Europe/Rome', flag: '🇮🇹', displayName: '佛罗伦萨', city: true },
    '威尼斯': { timezone: 'Europe/Rome', flag: '🇮🇹', displayName: '威尼斯', city: true },
    '瓦伦西亚': { timezone: 'Europe/Madrid', flag: '🇪🇸', displayName: '瓦伦西亚', city: true },
    '塞维利亚': { timezone: 'Europe/Madrid', flag: '🇪🇸', displayName: '塞维利亚', city: true },
    '毕尔巴鄂': { timezone: 'Europe/Madrid', flag: '🇪🇸', displayName: '毕尔巴鄂', city: true },
    '鹿特丹': { timezone: 'Europe/Amsterdam', flag: '🇳🇱', displayName: '鹿特丹', city: true },
    '海牙': { timezone: 'Europe/Amsterdam', flag: '🇳🇱', displayName: '海牙', city: true },
    '安特卫普': { timezone: 'Europe/Brussels', flag: '🇧🇪', displayName: '安特卫普', city: true },
    '日内瓦': { timezone: 'Europe/Zurich', flag: '🇨🇭', displayName: '日内瓦', city: true },
    '巴塞尔': { timezone: 'Europe/Zurich', flag: '🇨🇭', displayName: '巴塞尔', city: true },
    '萨尔茨堡': { timezone: 'Europe/Vienna', flag: '🇦🇹', displayName: '萨尔茨堡', city: true },
    '哥德堡': { timezone: 'Europe/Stockholm', flag: '🇸🇪', displayName: '哥德堡', city: true },
    '马尔默': { timezone: 'Europe/Stockholm', flag: '🇸🇪', displayName: '马尔默', city: true },
    '奥胡斯': { timezone: 'Europe/Copenhagen', flag: '🇩🇰', displayName: '奥胡斯', city: true },
    '卑尔根': { timezone: 'Europe/Oslo', flag: '🇳🇴', displayName: '卑尔根', city: true },
    '坦佩雷': { timezone: 'Europe/Helsinki', flag: '🇫🇮', displayName: '坦佩雷', city: true },
    '克拉科夫': { timezone: 'Europe/Warsaw', flag: '🇵🇱', displayName: '克拉科夫', city: true },
    '格但斯克': { timezone: 'Europe/Warsaw', flag: '🇵🇱', displayName: '格但斯克', city: true },
    '布尔诺': { timezone: 'Europe/Prague', flag: '🇨🇿', displayName: '布尔诺', city: true },
    '德布勒森': { timezone: 'Europe/Budapest', flag: '🇭🇺', displayName: '德布勒森', city: true },
    '波尔图': { timezone: 'Europe/Lisbon', flag: '🇵🇹', displayName: '波尔图', city: true },
    '科克': { timezone: 'Europe/Dublin', flag: '🇮🇪', displayName: '科克', city: true },
    '塞萨洛尼基': { timezone: 'Europe/Athens', flag: '🇬🇷', displayName: '塞萨洛尼基', city: true },
    '敖德萨': { timezone: 'Europe/Kiev', flag: '🇺🇦', displayName: '敖德萨', city: true },
    '哈尔科夫': { timezone: 'Europe/Kiev', flag: '🇺🇦', displayName: '哈尔科夫', city: true },
    '明斯克': { timezone: 'Europe/Minsk', flag: '🇧🇾', displayName: '明斯克', city: true },
    '叶卡捷琳堡': { timezone: 'Asia/Yekaterinburg', flag: '🇷🇺', displayName: '叶卡捷琳堡', city: true },
    '新西伯利亚': { timezone: 'Asia/Novosibirsk', flag: '🇷🇺', displayName: '新西伯利亚', city: true },
    '符拉迪沃斯托克': { timezone: 'Asia/Vladivostok', flag: '🇷🇺', displayName: '符拉迪沃斯托克', city: true },
    '喀山': { timezone: 'Europe/Moscow', flag: '🇷🇺', displayName: '喀山', city: true },
    '下诺夫哥罗德': { timezone: 'Europe/Moscow', flag: '🇷🇺', displayName: '下诺夫哥罗德', city: true },
    '萨马拉': { timezone: 'Europe/Samara', flag: '🇷🇺', displayName: '萨马拉', city: true },
    '费城': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '费城', city: true },
    '亚特兰大': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '亚特兰大', city: true },
    '底特律': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '底特律', city: true },
    '达拉斯': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '达拉斯', city: true },
    '凤凰城': { timezone: 'America/Phoenix', flag: '🇺🇸', displayName: '凤凰城', city: true },
    '丹佛': { timezone: 'America/Denver', flag: '🇺🇸', displayName: '丹佛', city: true },
    '拉斯维加斯': { timezone: 'America/Los_Angeles', flag: '🇺🇸', displayName: '拉斯维加斯', city: true },
    '圣地亚哥': { timezone: 'America/Los_Angeles', flag: '🇺🇸', displayName: '圣地亚哥', city: true },
    '波特兰': { timezone: 'America/Los_Angeles', flag: '🇺🇸', displayName: '波特兰', city: true },
    '新奥尔良': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '新奥尔良', city: true },
    '明尼阿波利斯': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '明尼阿波利斯', city: true },
    '堪萨斯城': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '堪萨斯城', city: true },
    '圣路易斯': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '圣路易斯', city: true },
    '匹兹堡': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '匹兹堡', city: true },
    '夏洛特': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '夏洛特', city: true },
    '巴尔的摩': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '巴尔的摩', city: true },
    '坦帕': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '坦帕', city: true },
    '奥兰多': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '奥兰多', city: true },
    '圣安东尼奥': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '圣安东尼奥', city: true },
    '奥斯汀': { timezone: 'America/Chicago', flag: '🇺🇸', displayName: '奥斯汀', city: true },
    '杰克逊维尔': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '杰克逊维尔', city: true },
    '哥伦布': { timezone: 'America/New_York', flag: '🇺🇸', displayName: '哥伦布', city: true },
    '火奴鲁鲁': { timezone: 'Pacific/Honolulu', flag: '🇺🇸', displayName: '火奴鲁鲁', city: true },
    '渥太华': { timezone: 'America/Toronto', flag: '🇨🇦', displayName: '渥太华', city: true },
    '卡尔加里': { timezone: 'America/Edmonton', flag: '🇨🇦', displayName: '卡尔加里', city: true },
    '埃德蒙顿': { timezone: 'America/Edmonton', flag: '🇨🇦', displayName: '埃德蒙顿', city: true },
    '温尼伯': { timezone: 'America/Winnipeg', flag: '🇨🇦', displayName: '温尼伯', city: true },
    '魁北克': { timezone: 'America/Toronto', flag: '🇨🇦', displayName: '魁北克', city: true },
    '哈利法克斯': { timezone: 'America/Halifax', flag: '🇨🇦', displayName: '哈利法克斯', city: true },
    
    // 第三批城市补充
    // 更多中国城市
    '宁波': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '宁波', city: true },
    '无锡': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '无锡', city: true },
    '佛山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '佛山', city: true },
    '东莞': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '东莞', city: true },
    '中山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '中山', city: true },
    '珠海': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '珠海', city: true },
    '惠州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '惠州', city: true },
    '嘉兴': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '嘉兴', city: true },
    '台州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '台州', city: true },
    '温州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '温州', city: true },
    '金华': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '金华', city: true },
    '绍兴': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '绍兴', city: true },
    '湖州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '湖州', city: true },
    '扬州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '扬州', city: true },
    '镇江': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '镇江', city: true },
    '南通': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '南通', city: true },
    '泰州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '泰州', city: true },
    '常州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '常州', city: true },
    '徐州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '徐州', city: true },
    '盐城': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '盐城', city: true },
    '淮安': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '淮安', city: true },
    '连云港': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '连云港', city: true },
    '宿迁': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '宿迁', city: true },
    '芜湖': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '芜湖', city: true },
    '马鞍山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '马鞍山', city: true },
    '安庆': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '安庆', city: true },
    '滁州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '滁州', city: true },
    '蚌埠': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '蚌埠', city: true },
    '淮南': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '淮南', city: true },
    '六安': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '六安', city: true },
    '阜阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '阜阳', city: true },
    '亳州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '亳州', city: true },
    '宿州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '宿州', city: true },
    '淮北': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '淮北', city: true },
    '铜陵': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '铜陵', city: true },
    '池州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '池州', city: true },
    '宣城': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '宣城', city: true },
    '黄山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '黄山', city: true },
    '莆田': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '莆田', city: true },
    '三明': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '三明', city: true },
    '泉州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '泉州', city: true },
    '漳州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '漳州', city: true },
    '南平': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '南平', city: true },
    '龙岩': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '龙岩', city: true },
    '宁德': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '宁德', city: true },
    '株洲': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '株洲', city: true },
    '湘潭': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '湘潭', city: true },
    '衡阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '衡阳', city: true },
    '邵阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '邵阳', city: true },
    '岳阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '岳阳', city: true },
    '常德': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '常德', city: true },
    '张家界': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '张家界', city: true },
    '益阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '益阳', city: true },
    '郴州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '郴州', city: true },
    '永州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '永州', city: true },
    '怀化': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '怀化', city: true },
    '娄底': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '娄底', city: true },
    '吉首': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '吉首', city: true },
    '洛阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '洛阳', city: true },
    '平顶山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '平顶山', city: true },
    '安阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '安阳', city: true },
    '鹤壁': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '鹤壁', city: true },
    '新乡': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '新乡', city: true },
    '焦作': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '焦作', city: true },
    '濮阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '濮阳', city: true },
    '许昌': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '许昌', city: true },
    '漯河': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '漯河', city: true },
    '三门峡': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '三门峡', city: true },
    '南阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '南阳', city: true },
    '商丘': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '商丘', city: true },
    '信阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '信阳', city: true },
    '周口': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '周口', city: true },
    '驻马店': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '驻马店', city: true },
    '济源': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '济源', city: true },
    '邯郸': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '邯郸', city: true },
    '唐山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '唐山', city: true },
    '秦皇岛': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '秦皇岛', city: true },
    '保定': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '保定', city: true },
    '张家口': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '张家口', city: true },
    '承德': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '承德', city: true },
    '沧州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '沧州', city: true },
    '廊坊': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '廊坊', city: true },
    '衡水': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '衡水', city: true },
    '太原': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '太原', city: true },
    '大同': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '大同', city: true },
    '阳泉': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '阳泉', city: true },
    '长治': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '长治', city: true },
    '晋城': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '晋城', city: true },
    '朔州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '朔州', city: true },
    '晋中': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '晋中', city: true },
    '运城': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '运城', city: true },
    '忻州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '忻州', city: true },
    '临汾': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '临汾', city: true },
    '吕梁': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '吕梁', city: true },
    '包头': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '包头', city: true },
    '乌海': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '乌海', city: true },
    '赤峰': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '赤峰', city: true },
    '通辽': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '通辽', city: true },
    '鄂尔多斯': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '鄂尔多斯', city: true },
    '呼伦贝尔': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '呼伦贝尔', city: true },
    '巴彦淖尔': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '巴彦淖尔', city: true },
    '乌兰察布': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '乌兰察布', city: true },
    '兴安盟': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '兴安盟', city: true },
    '锡林郭勒': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '锡林郭勒', city: true },
    '阿拉善': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '阿拉善', city: true },
    '鞍山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '鞍山', city: true },
    '抚顺': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '抚顺', city: true },
    '本溪': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '本溪', city: true },
    '丹东': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '丹东', city: true },
    '锦州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '锦州', city: true },
    '营口': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '营口', city: true },
    '阜新': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '阜新', city: true },
    '辽阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '辽阳', city: true },
    '盘锦': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '盘锦', city: true },
    '铁岭': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '铁岭', city: true },
    '朝阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '朝阳', city: true },
    '葫芦岛': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '葫芦岛', city: true },
    '吉林': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '吉林', city: true },
    '四平': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '四平', city: true },
    '辽源': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '辽源', city: true },
    '通化': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '通化', city: true },
    '白山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '白山', city: true },
    '松原': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '松原', city: true },
    '白城': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '白城', city: true },
    '延边': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '延边', city: true },
    '大庆': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '大庆', city: true },
    '鸡西': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '鸡西', city: true },
    '鹤岗': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '鹤岗', city: true },
    '双鸭山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '双鸭山', city: true },
    '伊春': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '伊春', city: true },
    '佳木斯': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '佳木斯', city: true },
    '七台河': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '七台河', city: true },
    '牡丹江': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '牡丹江', city: true },
    '黑河': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '黑河', city: true },
    '绥化': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '绥化', city: true },
    '大兴安岭': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '大兴安岭', city: true },
    '自贡': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '自贡', city: true },
    '攀枝花': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '攀枝花', city: true },
    '泸州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '泸州', city: true },
    '德阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '德阳', city: true },
    '绵阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '绵阳', city: true },
    '广元': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '广元', city: true },
    '遂宁': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '遂宁', city: true },
    '内江': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '内江', city: true },
    '乐山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '乐山', city: true },
    '南充': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '南充', city: true },
    '眉山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '眉山', city: true },
    '宜宾': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '宜宾', city: true },
    '广安': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '广安', city: true },
    '达州': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '达州', city: true },
    '雅安': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '雅安', city: true },
    '巴中': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '巴中', city: true },
    '资阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '资阳', city: true },
    '六盘水': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '六盘水', city: true },
    '遵义': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '遵义', city: true },
    '安顺': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '安顺', city: true },
    '毕节': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '毕节', city: true },
    '铜仁': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '铜仁', city: true },
    '曲靖': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '曲靖', city: true },
    '玉溪': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '玉溪', city: true },
    '保山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '保山', city: true },
    '昭通': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '昭通', city: true },
    '丽江': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '丽江', city: true },
    '普洱': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '普洱', city: true },
    '临沧': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '临沧', city: true },
    '楚雄': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '楚雄', city: true },
    '红河': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '红河', city: true },
    '文山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '文山', city: true },
    '西双版纳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '西双版纳', city: true },
    '大理': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '大理', city: true },
    '德宏': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '德宏', city: true },
    '怒江': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '怒江', city: true },
    '迪庆': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '迪庆', city: true },
    '日喀则': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '日喀则', city: true },
    '昌都': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '昌都', city: true },
    '山南': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '山南', city: true },
    '那曲': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '那曲', city: true },
    '阿里': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '阿里', city: true },
    '林芝': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '林芝', city: true },
    '克拉玛依': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '克拉玛依', city: true },
    '吐鲁番': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '吐鲁番', city: true },
    '哈密': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '哈密', city: true },
    '昌吉': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '昌吉', city: true },
    '博尔塔拉': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '博尔塔拉', city: true },
    '巴音郭楞': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '巴音郭楞', city: true },
    '阿克苏': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '阿克苏', city: true },
    '克孜勒苏': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '克孜勒苏', city: true },
    '喀什': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '喀什', city: true },
    '和田': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '和田', city: true },
    '伊犁': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '伊犁', city: true },
    '塔城': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '塔城', city: true },
    '阿勒泰': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '阿勒泰', city: true },
    '石河子': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '石河子', city: true },
    '阿拉尔': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '阿拉尔', city: true },
    '图木舒克': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '图木舒克', city: true },
    '五家渠': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '五家渠', city: true },
    '北屯': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '北屯', city: true },
    '铁门关': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '铁门关', city: true },
    '双河': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '双河', city: true },
    '可克达拉': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '可克达拉', city: true },
    '昆玉': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '昆玉', city: true },
    '胡杨河': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '胡杨河', city: true },
    '新星': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '新星', city: true },
    '白杨': { timezone: 'Asia/Urumqi', flag: '🇨🇳', displayName: '白杨', city: true },
    '白银': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '白银', city: true },
    '天水': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '天水', city: true },
    '武威': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '武威', city: true },
    '张掖': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '张掖', city: true },
    '平凉': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '平凉', city: true },
    '酒泉': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '酒泉', city: true },
    '庆阳': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '庆阳', city: true },
    '定西': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '定西', city: true },
    '陇南': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '陇南', city: true },
    '临夏': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '临夏', city: true },
    '甘南': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '甘南', city: true },
    '嘉峪关': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '嘉峪关', city: true },
    '金昌': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '金昌', city: true },
    '西宁': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '西宁', city: true },
    '海东': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '海东', city: true },
    '海北': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '海北', city: true },
    '黄南': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '黄南', city: true },
    '海南': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '海南', city: true },
    '果洛': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '果洛', city: true },
    '玉树': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '玉树', city: true },
    '海西': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '海西', city: true },
    '银川': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '银川', city: true },
    '石嘴山': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '石嘴山', city: true },
    '吴忠': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '吴忠', city: true },
    '固原': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '固原', city: true },
    '中卫': { timezone: 'Asia/Shanghai', flag: '🇨🇳', displayName: '中卫', city: true },
    
    // 更多国际城市
    '名古屋': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '名古屋', city: true },
    '横滨': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '横滨', city: true },
    '京都': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '京都', city: true },
    '神户': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '神户', city: true },
    '福冈': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '福冈', city: true },
    '札幌': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '札幌', city: true },
    '仙台': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '仙台', city: true },
    '广岛': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '广岛', city: true },
    '福岛': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '福岛', city: true },
    '新潟': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '新潟', city: true },
    '金泽': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '金泽', city: true },
    '静冈': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '静冈', city: true },
    '冈山': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '冈山', city: true },
    '高松': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '高松', city: true },
    '松山': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '松山', city: true },
    '高知': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '高知', city: true },
    '熊本': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '熊本', city: true },
    '鹿儿岛': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '鹿儿岛', city: true },
    '那霸': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '那霸', city: true },
    '大田': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '大田', city: true },
    '光州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '光州', city: true },
    '大邱': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '大邱', city: true },
    '仁川': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '仁川', city: true },
    '釜山': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '釜山', city: true },
    '蔚山': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '蔚山', city: true },
    '昌原': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '昌原', city: true },
    '清州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '清州', city: true },
    '全州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '全州', city: true },
    '济州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '济州', city: true },
    '水原': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '水原', city: true },
    '城南': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '城南', city: true },
    '高阳': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '高阳', city: true },
    '富川': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '富川', city: true },
    '安山': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '安山', city: true },
    '安养': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '安养', city: true },
    '议政府': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '议政府', city: true },
    '平泽': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '平泽', city: true },
    '天安': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '天安', city: true },
    '牙山': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '牙山', city: true },
    '群山': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '群山', city: true },
    '益山': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '益山', city: true },
    '木浦': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '木浦', city: true },
    '顺天': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '顺天', city: true },
    '丽水': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '丽水', city: true },
    '浦项': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '浦项', city: true },
    '庆州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '庆州', city: true },
    '安东': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '安东', city: true },
    '龟尾': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '龟尾', city: true },
    '金海': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '金海', city: true },
    '马山': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '马山', city: true },
    '统营': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '统营', city: true },
    '晋州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '晋州', city: true },
    '原州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '原州', city: true },
    '春川': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '春川', city: true },
    '束草': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '束草', city: true },
    '江陵': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '江陵', city: true },
    '东海': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '东海', city: true },
    '三陟': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '三陟', city: true },
    '太白': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '太白', city: true },
    '堤川': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '堤川', city: true },
    '忠州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '忠州', city: true },
    '公州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '公州', city: true },
    '扶余': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '扶余', city: true },
    '瑞山': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '瑞山', city: true },
    '保宁': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '保宁', city: true },
    '唐津': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '唐津', city: true },
    '舒川': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '舒川', city: true },
    '井邑': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '井邑', city: true },
    '南原': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '南原', city: true },
    '求礼': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '求礼', city: true },
    '和顺': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '和顺', city: true },
    '长兴': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '长兴', city: true },
    '高兴': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '高兴', city: true },
    '宝城': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '宝城', city: true },
    '莞岛': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '莞岛', city: true },
    '珍岛': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '珍岛', city: true },
    '务安': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '务安', city: true },
    '灵光': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '灵光', city: true },
    '咸平': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '咸平', city: true },
    '罗州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '罗州', city: true },
    '光阳': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '光阳', city: true },
    '谷城': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '谷城', city: true },
    '河东': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '河东', city: true },
    '山清': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '山清', city: true },
    '咸阳': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '咸阳', city: true },
    '居昌': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '居昌', city: true },
    '陕川': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '陕川', city: true },
    '宜宁': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '宜宁', city: true },
    '固城': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '固城', city: true },
    '泗川': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '泗川', city: true },
    '南海': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '南海', city: true },
    '巨济': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '巨济', city: true },
    '高灵': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '高灵', city: true },
    '星州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '星州', city: true },
    '漆谷': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '漆谷', city: true },
    '军威': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '军威', city: true },
    '义城': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '义城', city: true },
    '青松': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '青松', city: true },
    '英阳': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '英阳', city: true },
    '盈德': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '盈德', city: true },
    '郁陵': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '郁陵', city: true },
    
    // 更多国际城市补充（不含中国）
    '仙台': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '仙台', city: true },
    '广岛': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '广岛', city: true },
    '长崎': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '长崎', city: true },
    '熊本': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '熊本', city: true },
    '鹿儿岛': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '鹿儿岛', city: true },
    '那霸': { timezone: 'Asia/Tokyo', flag: '🇯🇵', displayName: '那霸', city: true },
    '大田': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '大田', city: true },
    '光州': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '光州', city: true },
    '蔚山': { timezone: 'Asia/Seoul', flag: '🇰🇷', displayName: '蔚山', city: true },
    '棉兰': { timezone: 'Asia/Jakarta', flag: '🇮🇩', displayName: '棉兰', city: true },
    '三宝垄': { timezone: 'Asia/Jakarta', flag: '🇮🇩', displayName: '三宝垄', city: true },
    '合艾': { timezone: 'Asia/Bangkok', flag: '🇹🇭', displayName: '合艾', city: true },
    '新山': { timezone: 'Asia/Kuala_Lumpur', flag: '🇲🇾', displayName: '新山', city: true },
    '达沃': { timezone: 'Asia/Manila', flag: '🇵🇭', displayName: '达沃', city: true },
    '马什哈德': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '马什哈德', city: true },
    '伊斯法罕': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '伊斯法罕', city: true },
    '设拉子': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '设拉子', city: true },
    '大不里士': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '大不里士', city: true },
    '巴士拉': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '巴士拉', city: true },
    '摩苏尔': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '摩苏尔', city: true },
    '伊尔库茨克': { timezone: 'Asia/Irkutsk', flag: '🇷🇺', displayName: '伊尔库茨克', city: true },
    '克拉斯诺亚尔斯克': { timezone: 'Asia/Krasnoyarsk', flag: '🇷🇺', displayName: '克拉斯诺亚尔斯克', city: true },
    '雅库茨克': { timezone: 'Asia/Yakutsk', flag: '🇷🇺', displayName: '雅库茨克', city: true },
    '马加丹': { timezone: 'Asia/Magadan', flag: '🇷🇺', displayName: '马加丹', city: true },
    '堪察加': { timezone: 'Asia/Kamchatka', flag: '🇷🇺', displayName: '堪察加', city: true },
    '加里宁格勒': { timezone: 'Europe/Kaliningrad', flag: '🇷🇺', displayName: '加里宁格勒', city: true },
    '莱昂': { timezone: 'America/Mexico_City', flag: '🇲🇽', displayName: '莱昂', city: true },
    '托卢卡': { timezone: 'America/Mexico_City', flag: '🇲🇽', displayName: '托卢卡', city: true },
    '克雷塔罗': { timezone: 'America/Mexico_City', flag: '🇲🇽', displayName: '克雷塔罗', city: true },
    '梅里达': { timezone: 'America/Mexico_City', flag: '🇲🇽', displayName: '梅里达', city: true },
    '阿卡普尔科': { timezone: 'America/Mexico_City', flag: '🇲🇽', displayName: '阿卡普尔科', city: true },
    '萨尔瓦多': { timezone: 'America/Bahia', flag: '🇧🇷', displayName: '萨尔瓦多', city: true },
    '累西腓': { timezone: 'America/Recife', flag: '🇧🇷', displayName: '累西腓', city: true },
    '福塔雷萨': { timezone: 'America/Fortaleza', flag: '🇧🇷', displayName: '福塔雷萨', city: true },
    '贝伦': { timezone: 'America/Belem', flag: '🇧🇷', displayName: '贝伦', city: true },
    '马瑙斯': { timezone: 'America/Manaus', flag: '🇧🇷', displayName: '马瑙斯', city: true },
    '阿雷格里港': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '阿雷格里港', city: true },
    '弗洛里亚诺波利斯': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '弗洛里亚诺波利斯', city: true },
    '坎皮纳斯': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '坎皮纳斯', city: true },
    '圣路易斯': { timezone: 'America/Fortaleza', flag: '🇧🇷', displayName: '圣路易斯', city: true },
    '维多利亚': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '维多利亚', city: true },
    '纳塔尔': { timezone: 'America/Fortaleza', flag: '🇧🇷', displayName: '纳塔尔', city: true },
    '若昂佩索阿': { timezone: 'America/Fortaleza', flag: '🇧🇷', displayName: '若昂佩索阿', city: true },
    '马塞约': { timezone: 'America/Maceio', flag: '🇧🇷', displayName: '马塞约', city: true },
    '特雷西纳': { timezone: 'America/Fortaleza', flag: '🇧🇷', displayName: '特雷西纳', city: true },
    '茹伊斯迪福拉': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '茹伊斯迪福拉', city: true },
    '里贝朗普雷图': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '里贝朗普雷图', city: true },
    '索罗卡巴': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '索罗卡巴', city: true },
    '桑托斯': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '桑托斯', city: true },
    '坎皮纳格兰德': { timezone: 'America/Fortaleza', flag: '🇧🇷', displayName: '坎皮纳格兰德', city: true },
    '新伊瓜苏': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '新伊瓜苏', city: true },
    '圣贡萨洛': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '圣贡萨洛', city: true },
    '杜克卡西亚斯': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '杜克卡西亚斯', city: true },
    '圣贝尔纳多-杜坎普': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '圣贝尔纳多-杜坎普', city: true },
    '奥萨斯科': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '奥萨斯科', city: true },
    '瓜鲁柳斯': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '瓜鲁柳斯', city: true },
    '圣安德烈': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '圣安德烈', city: true },
    '雅博阿唐': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '雅博阿唐', city: true },
    '圣若泽多斯坎普斯': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '圣若泽多斯坎普斯', city: true },
    '巴拉曼萨': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '巴拉曼萨', city: true },
    '圣卡埃塔诺': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '圣卡埃塔诺', city: true },
    '伊塔夸克塞图巴': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '伊塔夸克塞图巴', city: true },
    '莫日达斯克鲁济斯': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '莫日达斯克鲁济斯', city: true },
    '卡鲁阿鲁': { timezone: 'America/Recife', flag: '🇧🇷', displayName: '卡鲁阿鲁', city: true },
    '费拉迪圣安娜': { timezone: 'America/Bahia', flag: '🇧🇷', displayName: '费拉迪圣安娜', city: true },
    '维托里亚': { timezone: 'America/Sao_Paulo', flag: '🇧🇷', displayName: '维托里亚', city: true },
    '茹安佩索阿': { timezone: 'America/Fortaleza', flag: '🇧🇷', displayName: '茹安佩索阿', city: true },
    '马卡帕': { timezone: 'America/Belem', flag: '🇧🇷', displayName: '马卡帕', city: true },
    '里奥布朗库': { timezone: 'America/Rio_Branco', flag: '🇧🇷', displayName: '里奥布朗库', city: true },
    '波多韦柳': { timezone: 'America/Porto_Velho', flag: '🇧🇷', displayName: '波多韦柳', city: true },
    '库亚巴': { timezone: 'America/Cuiaba', flag: '🇧🇷', displayName: '库亚巴', city: true },
    '大坎普': { timezone: 'America/Campo_Grande', flag: '🇧🇷', displayName: '大坎普', city: true },
    '帕尔马斯': { timezone: 'America/Araguaina', flag: '🇧🇷', displayName: '帕尔马斯', city: true },
    
    // 阿拉伯国家城市
    '利雅得': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '利雅得', city: true },
    '吉达': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '吉达', city: true },
    '麦加': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '麦加', city: true },
    '麦地那': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '麦地那', city: true },
    '达曼': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '达曼', city: true },
    '塔伊夫': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '塔伊夫', city: true },
    '布赖代': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '布赖代', city: true },
    '卡提夫': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '卡提夫', city: true },
    '胡富夫': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '胡富夫', city: true },
    '哈伊勒': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '哈伊勒', city: true },
    '纳季兰': { timezone: 'Asia/Riyadh', flag: '🇸🇦', displayName: '纳季兰', city: true },
    '阿布扎比': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '阿布扎比', city: true },
    '沙迦': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '沙迦', city: true },
    '阿治曼': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '阿治曼', city: true },
    '富查伊拉': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '富查伊拉', city: true },
    '乌姆盖万': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '乌姆盖万', city: true },
    '哈伊马角': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '哈伊马角', city: true },
    '艾因': { timezone: 'Asia/Dubai', flag: '🇦🇪', displayName: '艾因', city: true },
    '多哈': { timezone: 'Asia/Qatar', flag: '🇶🇦', displayName: '多哈', city: true },
    '赖扬': { timezone: 'Asia/Qatar', flag: '🇶🇦', displayName: '赖扬', city: true },
    '沃克拉': { timezone: 'Asia/Qatar', flag: '🇶🇦', displayName: '沃克拉', city: true },
    '豪尔': { timezone: 'Asia/Qatar', flag: '🇶🇦', displayName: '豪尔', city: true },
    '多哈港': { timezone: 'Asia/Qatar', flag: '🇶🇦', displayName: '多哈港', city: true },
    '科威特城': { timezone: 'Asia/Kuwait', flag: '🇰🇼', displayName: '科威特城', city: true },
    '艾哈迈迪': { timezone: 'Asia/Kuwait', flag: '🇰🇼', displayName: '艾哈迈迪', city: true },
    '贾赫拉': { timezone: 'Asia/Kuwait', flag: '🇰🇼', displayName: '贾赫拉', city: true },
    '法尔瓦尼亚': { timezone: 'Asia/Kuwait', flag: '🇰🇼', displayName: '法尔瓦尼亚', city: true },
    '麦纳麦': { timezone: 'Asia/Bahrain', flag: '🇧🇭', displayName: '麦纳麦', city: true },
    '里法': { timezone: 'Asia/Bahrain', flag: '🇧🇭', displayName: '里法', city: true },
    '穆哈拉格': { timezone: 'Asia/Bahrain', flag: '🇧🇭', displayName: '穆哈拉格', city: true },
    '锡特拉': { timezone: 'Asia/Bahrain', flag: '🇧🇭', displayName: '锡特拉', city: true },
    '马斯喀特': { timezone: 'Asia/Muscat', flag: '🇴🇲', displayName: '马斯喀特', city: true },
    '塞拉莱': { timezone: 'Asia/Muscat', flag: '🇴🇲', displayName: '塞拉莱', city: true },
    '苏哈尔': { timezone: 'Asia/Muscat', flag: '🇴🇲', displayName: '苏哈尔', city: true },
    '尼兹瓦': { timezone: 'Asia/Muscat', flag: '🇴🇲', displayName: '尼兹瓦', city: true },
    '苏尔': { timezone: 'Asia/Muscat', flag: '🇴🇲', displayName: '苏尔', city: true },
    '安曼': { timezone: 'Asia/Amman', flag: '🇯🇴', displayName: '安曼', city: true },
    '亚喀巴': { timezone: 'Asia/Amman', flag: '🇯🇴', displayName: '亚喀巴', city: true },
    '伊尔比德': { timezone: 'Asia/Amman', flag: '🇯🇴', displayName: '伊尔比德', city: true },
    '扎尔卡': { timezone: 'Asia/Amman', flag: '🇯🇴', displayName: '扎尔卡', city: true },
    '马安': { timezone: 'Asia/Amman', flag: '🇯🇴', displayName: '马安', city: true },
    '贝鲁特': { timezone: 'Asia/Beirut', flag: '🇱🇧', displayName: '贝鲁特', city: true },
    '的黎波里': { timezone: 'Asia/Beirut', flag: '🇱🇧', displayName: '的黎波里', city: true },
    '西顿': { timezone: 'Asia/Beirut', flag: '🇱🇧', displayName: '西顿', city: true },
    '提尔': { timezone: 'Asia/Beirut', flag: '🇱🇧', displayName: '提尔', city: true },
    '扎赫勒': { timezone: 'Asia/Beirut', flag: '🇱🇧', displayName: '扎赫勒', city: true },
    '大马士革': { timezone: 'Asia/Damascus', flag: '🇸🇾', displayName: '大马士革', city: true },
    '阿勒颇': { timezone: 'Asia/Damascus', flag: '🇸🇾', displayName: '阿勒颇', city: true },
    '霍姆斯': { timezone: 'Asia/Damascus', flag: '🇸🇾', displayName: '霍姆斯', city: true },
    '拉塔基亚': { timezone: 'Asia/Damascus', flag: '🇸🇾', displayName: '拉塔基亚', city: true },
    '哈马': { timezone: 'Asia/Damascus', flag: '🇸🇾', displayName: '哈马', city: true },
    '萨那': { timezone: 'Asia/Aden', flag: '🇾🇪', displayName: '萨那', city: true },
    '亚丁': { timezone: 'Asia/Aden', flag: '🇾🇪', displayName: '亚丁', city: true },
    '荷台达': { timezone: 'Asia/Aden', flag: '🇾🇪', displayName: '荷台达', city: true },
    '塔伊兹': { timezone: 'Asia/Aden', flag: '🇾🇪', displayName: '塔伊兹', city: true },
    '伊卜': { timezone: 'Asia/Aden', flag: '🇾🇪', displayName: '伊卜', city: true },
    '巴格达': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '巴格达', city: true },
    '巴士拉': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '巴士拉', city: true },
    '摩苏尔': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '摩苏尔', city: true },
    '埃尔比勒': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '埃尔比勒', city: true },
    '基尔库克': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '基尔库克', city: true },
    '纳杰夫': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '纳杰夫', city: true },
    '卡尔巴拉': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '卡尔巴拉', city: true },
    '苏莱曼尼亚': { timezone: 'Asia/Baghdad', flag: '🇮🇶', displayName: '苏莱曼尼亚', city: true },
    '德黑兰': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '德黑兰', city: true },
    '马什哈德': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '马什哈德', city: true },
    '伊斯法罕': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '伊斯法罕', city: true },
    '设拉子': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '设拉子', city: true },
    '大不里士': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '大不里士', city: true },
    '库姆': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '库姆', city: true },
    '卡拉季': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '卡拉季', city: true },
    '阿瓦士': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '阿瓦士', city: true },
    '克尔曼沙阿': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '克尔曼沙阿', city: true },
    '拉什特': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '拉什特', city: true },
    '扎黑丹': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '扎黑丹', city: true },
    '亚兹德': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '亚兹德', city: true },
    '阿尔达比勒': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '阿尔达比勒', city: true },
    '加兹温': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '加兹温', city: true },
    '萨里': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '萨里', city: true },
    '戈尔甘': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '戈尔甘', city: true },
    '哈马丹': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '哈马丹', city: true },
    '卡尚': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '卡尚', city: true },
    '马什哈德': { timezone: 'Asia/Tehran', flag: '🇮🇷', displayName: '马什哈德', city: true },
    
    // 非洲国家城市
    '开罗': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '开罗', city: true },
    '亚历山大': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '亚历山大', city: true },
    '吉萨': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '吉萨', city: true },
    '沙姆沙伊赫': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '沙姆沙伊赫', city: true },
    '卢克索': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '卢克索', city: true },
    '阿斯旺': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '阿斯旺', city: true },
    '塞得港': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '塞得港', city: true },
    '苏伊士': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '苏伊士', city: true },
    '坦塔': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '坦塔', city: true },
    '曼苏拉': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '曼苏拉', city: true },
    '伊斯梅利亚': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '伊斯梅利亚', city: true },
    '达米埃塔': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '达米埃塔', city: true },
    '扎加齐格': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '扎加齐格', city: true },
    '法尤姆': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '法尤姆', city: true },
    '明亚': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '明亚', city: true },
    '索哈杰': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '索哈杰', city: true },
    '基纳': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '基纳', city: true },
    '赫尔格达': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '赫尔格达', city: true },
    '马萨阿拉姆': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '马萨阿拉姆', city: true },
    '达哈卜': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '达哈卜', city: true },
    '努韦巴': { timezone: 'Africa/Cairo', flag: '🇪🇬', displayName: '努韦巴', city: true },
    '约翰内斯堡': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '约翰内斯堡', city: true },
    '开普敦': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '开普敦', city: true },
    '比勒陀利亚': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '比勒陀利亚', city: true },
    '德班': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '德班', city: true },
    '伊丽莎白港': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '伊丽莎白港', city: true },
    '布隆方丹': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '布隆方丹', city: true },
    '东伦敦': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '东伦敦', city: true },
    '金伯利': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '金伯利', city: true },
    '波洛夸内': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '波洛夸内', city: true },
    '内尔斯普雷特': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '内尔斯普雷特', city: true },
    '姆普马兰加': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '姆普马兰加', city: true },
    '彼得马里茨堡': { timezone: 'Africa/Johannesburg', flag: '🇿🇦', displayName: '彼得马里茨堡', city: true },
    '拉各斯': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '拉各斯', city: true },
    '阿布贾': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '阿布贾', city: true },
    '卡诺': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '卡诺', city: true },
    '伊巴丹': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '伊巴丹', city: true },
    '哈科特港': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '哈科特港', city: true },
    '贝宁城': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '贝宁城', city: true },
    '卡杜纳': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '卡杜纳', city: true },
    '迈杜古里': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '迈杜古里', city: true },
    '奥尼查': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '奥尼查', city: true },
    '阿巴': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '阿巴', city: true },
    '奥韦里': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '奥韦里', city: true },
    '扎里亚': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '扎里亚', city: true },
    '包奇': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '包奇', city: true },
    '索科托': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '索科托', city: true },
    '奥绍博': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '奥绍博', city: true },
    '奥博莫绍': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '奥博莫绍', city: true },
    '伊基贾': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '伊基贾', city: true },
    '马库尔迪': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '马库尔迪', city: true },
    '阿库雷': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '阿库雷', city: true },
    '奥约': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '奥约', city: true },
    '奥卡': { timezone: 'Africa/Lagos', flag: '🇳🇬', displayName: '奥卡', city: true },
    '内罗毕': { timezone: 'Africa/Nairobi', flag: '🇰🇪', displayName: '内罗毕', city: true },
    '蒙巴萨': { timezone: 'Africa/Nairobi', flag: '🇰🇪', displayName: '蒙巴萨', city: true },
    '基苏木': { timezone: 'Africa/Nairobi', flag: '🇰🇪', displayName: '基苏木', city: true },
    '纳库鲁': { timezone: 'Africa/Nairobi', flag: '🇰🇪', displayName: '纳库鲁', city: true },
    '埃尔多雷特': { timezone: 'Africa/Nairobi', flag: '🇰🇪', displayName: '埃尔多雷特', city: true },
    '基塔莱': { timezone: 'Africa/Nairobi', flag: '🇰🇪', displayName: '基塔莱', city: true },
    '马林迪': { timezone: 'Africa/Nairobi', flag: '🇰🇪', displayName: '马林迪', city: true },
    '拉穆': { timezone: 'Africa/Nairobi', flag: '🇰🇪', displayName: '拉穆', city: true },
    '卡萨布兰卡': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '卡萨布兰卡', city: true },
    '拉巴特': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '拉巴特', city: true },
    '非斯': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '非斯', city: true },
    '马拉喀什': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '马拉喀什', city: true },
    '丹吉尔': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '丹吉尔', city: true },
    '梅克内斯': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '梅克内斯', city: true },
    '阿加迪尔': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '阿加迪尔', city: true },
    '得土安': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '得土安', city: true },
    '乌季达': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '乌季达', city: true },
    '萨菲': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '萨菲', city: true },
    '肯尼特拉': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '肯尼特拉', city: true },
    '拉腊什': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '拉腊什', city: true },
    '艾西拉': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '艾西拉', city: true },
    '索维拉': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '索维拉', city: true },
    '瓦尔扎扎特': { timezone: 'Africa/Casablanca', flag: '🇲🇦', displayName: '瓦尔扎扎特', city: true },
    '阿尔及尔': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '阿尔及尔', city: true },
    '奥兰': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '奥兰', city: true },
    '君士坦丁': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '君士坦丁', city: true },
    '安纳巴': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '安纳巴', city: true },
    '巴特纳': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '巴特纳', city: true },
    '贝贾亚': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '贝贾亚', city: true },
    '塞蒂夫': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '塞蒂夫', city: true },
    '提帕萨': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '提帕萨', city: true },
    '特莱姆森': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '特莱姆森', city: true },
    '比斯克拉': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '比斯克拉', city: true },
    '特贝萨': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '特贝萨', city: true },
    '盖尔达耶': { timezone: 'Africa/Algiers', flag: '🇩🇿', displayName: '盖尔达耶', city: true },
    '突尼斯': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '突尼斯', city: true },
    '斯法克斯': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '斯法克斯', city: true },
    '苏塞': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '苏塞', city: true },
    '凯鲁万': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '凯鲁万', city: true },
    '比塞大': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '比塞大', city: true },
    '加贝斯': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '加贝斯', city: true },
    '杰尔巴岛': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '杰尔巴岛', city: true },
    '哈马马特': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '哈马马特', city: true },
    '莫纳斯提尔': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '莫纳斯提尔', city: true },
    '托泽尔': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '托泽尔', city: true },
    '杜兹': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '杜兹', city: true },
    '马特马塔': { timezone: 'Africa/Tunis', flag: '🇹🇳', displayName: '马特马塔', city: true },
    '达累斯萨拉姆': { timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', displayName: '达累斯萨拉姆', city: true },
    '桑给巴尔': { timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', displayName: '桑给巴尔', city: true },
    '阿鲁沙': { timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', displayName: '阿鲁沙', city: true },
    '姆万扎': { timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', displayName: '姆万扎', city: true },
    '多多马': { timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', displayName: '多多马', city: true },
    '姆贝亚': { timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', displayName: '姆贝亚', city: true },
    '坦噶': { timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', displayName: '坦噶', city: true },
    '莫希': { timezone: 'Africa/Dar_es_Salaam', flag: '🇹🇿', displayName: '莫希', city: true },
    '坎帕拉': { timezone: 'Africa/Kampala', flag: '🇺🇬', displayName: '坎帕拉', city: true },
    '金贾': { timezone: 'Africa/Kampala', flag: '🇺🇬', displayName: '金贾', city: true },
    '姆巴莱': { timezone: 'Africa/Kampala', flag: '🇺🇬', displayName: '姆巴莱', city: true },
    '恩德培': { timezone: 'Africa/Kampala', flag: '🇺🇬', displayName: '恩德培', city: true },
    '古卢': { timezone: 'Africa/Kampala', flag: '🇺🇬', displayName: '古卢', city: true },
    '阿鲁阿': { timezone: 'Africa/Kampala', flag: '🇺🇬', displayName: '阿鲁阿', city: true },
    '姆巴拉拉': { timezone: 'Africa/Kampala', flag: '🇺🇬', displayName: '姆巴拉拉', city: true },
    '马萨卡': { timezone: 'Africa/Kampala', flag: '🇺🇬', displayName: '马萨卡', city: true },
    '金沙萨': { timezone: 'Africa/Kinshasa', flag: '🇨🇩', displayName: '金沙萨', city: true },
    '卢本巴希': { timezone: 'Africa/Lubumbashi', flag: '🇨🇩', displayName: '卢本巴希', city: true },
    '姆布吉马伊': { timezone: 'Africa/Lubumbashi', flag: '🇨🇩', displayName: '姆布吉马伊', city: true },
    '基桑加尼': { timezone: 'Africa/Kinshasa', flag: '🇨🇩', displayName: '基桑加尼', city: true },
    '卡南加': { timezone: 'Africa/Lubumbashi', flag: '🇨🇩', displayName: '卡南加', city: true },
    '布卡武': { timezone: 'Africa/Lubumbashi', flag: '🇨🇩', displayName: '布卡武', city: true },
    '戈马': { timezone: 'Africa/Lubumbashi', flag: '🇨🇩', displayName: '戈马', city: true },
    '基奎特': { timezone: 'Africa/Kinshasa', flag: '🇨🇩', displayName: '基奎特', city: true },
    '马塔迪': { timezone: 'Africa/Kinshasa', flag: '🇨🇩', displayName: '马塔迪', city: true },
    '姆班达卡': { timezone: 'Africa/Kinshasa', flag: '🇨🇩', displayName: '姆班达卡', city: true },
    '加丹加': { timezone: 'Africa/Lubumbashi', flag: '🇨🇩', displayName: '加丹加', city: true },
    '卢萨卡': { timezone: 'Africa/Lusaka', flag: '🇿🇲', displayName: '卢萨卡', city: true },
    '基特韦': { timezone: 'Africa/Lusaka', flag: '🇿🇲', displayName: '基特韦', city: true },
    '恩多拉': { timezone: 'Africa/Lusaka', flag: '🇿🇲', displayName: '恩多拉', city: true },
    '卡布韦': { timezone: 'Africa/Lusaka', flag: '🇿🇲', displayName: '卡布韦', city: true },
    '利文斯通': { timezone: 'Africa/Lusaka', flag: '🇿🇲', displayName: '利文斯通', city: true },
    '卡萨马': { timezone: 'Africa/Lusaka', flag: '🇿🇲', displayName: '卡萨马', city: true },
    '姆皮卡': { timezone: 'Africa/Lusaka', flag: '🇿🇲', displayName: '姆皮卡', city: true },
    '哈拉雷': { timezone: 'Africa/Harare', flag: '🇿🇼', displayName: '哈拉雷', city: true },
    '布拉瓦约': { timezone: 'Africa/Harare', flag: '🇿🇼', displayName: '布拉瓦约', city: true },
    '奇通圭扎': { timezone: 'Africa/Harare', flag: '🇿🇼', displayName: '奇通圭扎', city: true },
    '穆塔雷': { timezone: 'Africa/Harare', flag: '🇿🇼', displayName: '穆塔雷', city: true },
    '圭鲁': { timezone: 'Africa/Harare', flag: '🇿🇼', displayName: '圭鲁', city: true },
    '卡多马': { timezone: 'Africa/Harare', flag: '🇿🇼', displayName: '卡多马', city: true },
    '马斯温戈': { timezone: 'Africa/Harare', flag: '🇿🇼', displayName: '马斯温戈', city: true },
    '罗安达': { timezone: 'Africa/Luanda', flag: '🇦🇴', displayName: '罗安达', city: true },
    '本格拉': { timezone: 'Africa/Luanda', flag: '🇦🇴', displayName: '本格拉', city: true },
    '洛比托': { timezone: 'Africa/Luanda', flag: '🇦🇴', displayName: '洛比托', city: true },
    '万博': { timezone: 'Africa/Luanda', flag: '🇦🇴', displayName: '万博', city: true },
    '卢班戈': { timezone: 'Africa/Luanda', flag: '🇦🇴', displayName: '卢班戈', city: true },
    '马兰热': { timezone: 'Africa/Luanda', flag: '🇦🇴', displayName: '马兰热', city: true },
    '纳米贝': { timezone: 'Africa/Luanda', flag: '🇦🇴', displayName: '纳米贝', city: true },
    '卡宾达': { timezone: 'Africa/Luanda', flag: '🇦🇴', displayName: '卡宾达', city: true },
    '达喀尔': { timezone: 'Africa/Dakar', flag: '🇸🇳', displayName: '达喀尔', city: true },
    '蒂埃斯': { timezone: 'Africa/Dakar', flag: '🇸🇳', displayName: '蒂埃斯', city: true },
    '圣路易': { timezone: 'Africa/Dakar', flag: '🇸🇳', displayName: '圣路易', city: true },
    '济金绍尔': { timezone: 'Africa/Dakar', flag: '🇸🇳', displayName: '济金绍尔', city: true },
    '考拉克': { timezone: 'Africa/Dakar', flag: '🇸🇳', displayName: '考拉克', city: true },
    '卢加': { timezone: 'Africa/Dakar', flag: '🇸🇳', displayName: '卢加', city: true },
    '阿比让': { timezone: 'Africa/Abidjan', flag: '🇨🇮', displayName: '阿比让', city: true },
    '布瓦凯': { timezone: 'Africa/Abidjan', flag: '🇨🇮', displayName: '布瓦凯', city: true },
    '达洛亚': { timezone: 'Africa/Abidjan', flag: '🇨🇮', displayName: '达洛亚', city: true },
    '科霍戈': { timezone: 'Africa/Abidjan', flag: '🇨🇮', displayName: '科霍戈', city: true },
    '马恩': { timezone: 'Africa/Abidjan', flag: '🇨🇮', displayName: '马恩', city: true },
    '圣佩德罗': { timezone: 'Africa/Abidjan', flag: '🇨🇮', displayName: '圣佩德罗', city: true },
    '亚穆苏克罗': { timezone: 'Africa/Abidjan', flag: '🇨🇮', displayName: '亚穆苏克罗', city: true },
    '阿克拉': { timezone: 'Africa/Accra', flag: '🇬🇭', displayName: '阿克拉', city: true },
    '库马西': { timezone: 'Africa/Accra', flag: '🇬🇭', displayName: '库马西', city: true },
    '塔马利': { timezone: 'Africa/Accra', flag: '🇬🇭', displayName: '塔马利', city: true },
    '塔科拉迪': { timezone: 'Africa/Accra', flag: '🇬🇭', displayName: '塔科拉迪', city: true },
    '海岸角': { timezone: 'Africa/Accra', flag: '🇬🇭', displayName: '海岸角', city: true },
    '奥布阿西': { timezone: 'Africa/Accra', flag: '🇬🇭', displayName: '奥布阿西', city: true },
    '特马': { timezone: 'Africa/Accra', flag: '🇬🇭', displayName: '特马', city: true },
    '霍城': { timezone: 'Africa/Accra', flag: '🇬🇭', displayName: '霍城', city: true },
    '亚的斯亚贝巴': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '亚的斯亚贝巴', city: true },
    '德雷达瓦': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '德雷达瓦', city: true },
    '贡德尔': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '贡德尔', city: true },
    '默克莱': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '默克莱', city: true },
    '阿瓦萨': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '阿瓦萨', city: true },
    '巴赫达尔': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '巴赫达尔', city: true },
    '德西': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '德西', city: true },
    '季马': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '季马', city: true },
    '哈勒尔': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '哈勒尔', city: true },
    '拉利贝拉': { timezone: 'Africa/Addis_Ababa', flag: '🇪🇹', displayName: '拉利贝拉', city: true },
};

// 按大洲分类的国家列表
const countriesByRegion = {
    '亚洲': {
        '东亚': ['中国', '日本', '韩国', '朝鲜', '蒙古'],
        '中亚': ['哈萨克斯坦', '乌兹别克斯坦', '吉尔吉斯斯坦', '塔吉克斯坦', '土库曼斯坦', '阿富汗'],
        '南亚': ['巴基斯坦', '印度', '尼泊尔', '不丹', '孟加拉国', '斯里兰卡', '马尔代夫', '缅甸'],
        '东南亚': ['泰国', '老挝', '柬埔寨', '越南', '马来西亚', '新加坡', '印度尼西亚', '文莱', '菲律宾', '东帝汶'],
        '西亚': ['沙特阿拉伯', '阿联酋', '卡塔尔', '巴林', '科威特', '阿曼', '也门', '伊拉克', '伊朗', '以色列', '巴勒斯坦', '约旦', '黎巴嫩', '叙利亚', '格鲁吉亚', '亚美尼亚', '阿塞拜疆', '土耳其', '塞浦路斯', '希腊']
    },
    '欧洲': {
        '北欧': ['冰岛', '爱尔兰', '英国', '丹麦', '瑞典', '挪威', '芬兰', '爱沙尼亚', '拉脱维亚', '立陶宛'],
        '西欧': ['葡萄牙', '西班牙', '法国', '比利时', '荷兰', '卢森堡', '德国', '奥地利', '瑞士', '列支敦士登'],
        '南欧': ['意大利', '圣马力诺', '梵蒂冈', '马耳他', '摩纳哥', '安道尔', '希腊', '塞浦路斯'],
        '中欧': ['波兰', '捷克', '斯洛伐克', '匈牙利', '斯洛文尼亚', '克罗地亚', '波斯尼亚和黑塞哥维那', '塞尔维亚', '黑山', '北马其顿', '阿尔巴尼亚', '科索沃'],
        '东欧': ['保加利亚', '罗马尼亚', '摩尔多瓦', '乌克兰', '白俄罗斯', '俄罗斯/加里宁格勒', '俄罗斯/莫斯科', '俄罗斯/萨马拉', '俄罗斯/叶卡捷琳堡', '俄罗斯/新西伯利亚', '俄罗斯/克拉斯诺亚尔斯克', '俄罗斯/伊尔库茨克', '俄罗斯/雅库茨克', '俄罗斯/符拉迪沃斯托克', '俄罗斯/马加丹', '俄罗斯/堪察加']
    },
    '北美洲': {
        '美国': ['美国阿拉斯加', '美国西部', '美国山地', '美国中部', '美国东部'],
        '加拿大': ['加拿大西部', '加拿大中部', '加拿大东部', '加拿大纽芬兰'],
        '墨西哥及中美洲': ['墨西哥西部', '墨西哥首都/中部', '墨西哥东部', '危地马拉', '伯利兹', '萨尔瓦多', '洪都拉斯', '尼加拉瓜', '哥斯达黎加', '巴拿马'],
        '加勒比海地区': ['古巴', '牙买加', '海地', '多米尼加', '波多黎各', '特立尼达和多巴哥', '巴巴多斯', '圣基茨和尼维斯', '安提瓜和巴布达', '多米尼克', '圣卢西亚', '圣文森特和格林纳丁斯', '格林纳达', '巴哈马', '百慕大'],
        '其他': ['格陵兰']
    },
    '南美洲': {
        '南美洲': ['巴西', '阿根廷', '智利', '乌拉圭', '巴拉圭', '玻利维亚', '秘鲁', '厄瓜多尔', '哥伦比亚', '委内瑞拉', '圭亚那', '苏里南', '法属圭亚那']
    },
    '非洲': {
        '北非': ['阿尔及利亚', '突尼斯', '利比亚', '埃及', '苏丹', '南苏丹'],
        '东非': ['埃塞俄比亚', '厄立特里亚', '吉布提', '索马里', '肯尼亚', '乌干达', '坦桑尼亚', '卢旺达', '布隆迪'],
        '中非': ['刚果民主共和国', '刚果共和国', '中非', '乍得', '喀麦隆'],
        '西非': ['尼日利亚', '尼日尔', '贝宁', '多哥', '加纳', '布基纳法索', '马里', '塞内加尔', '冈比亚', '几内亚比绍', '几内亚', '塞拉利昂', '利比里亚', '科特迪瓦', '加蓬', '赤道几内亚', '圣多美和普林西比'],
        '南非': ['安哥拉', '赞比亚', '津巴布韦', '博茨瓦纳', '纳米比亚', '南非', '莱索托', '斯威士兰', '马达加斯加', '毛里求斯', '塞舌尔', '科摩罗', '马约特', '留尼汪']
    },
    '大洋洲': {
        '澳大利亚': ['澳大利亚东部', '澳大利亚西部', '澳大利亚中部'],
        '新西兰及太平洋': ['新西兰', '巴布亚新几内亚', '所罗门群岛', '瓦努阿图', '新喀里多尼亚', '斐济', '汤加', '萨摩亚', '基里巴斯', '基里巴斯/东部', '图瓦卢', '瑙鲁', '马绍尔群岛', '密克罗尼西亚/楚克州', '密克罗尼西亚/波纳佩州', '帕劳', '关岛', '北马里亚纳群岛', '美属萨摩亚', '库克群岛', '法属波利尼西亚', '皮特凯恩群岛', '复活节岛', '加拉帕戈斯群岛', '夏威夷']
    }
};

class TimeZoneConverter {
    constructor() {
        this.mainCountry = null;
        this.mainTimes = [];
        this.targetCountries = [];
        this.selectedMainCountry = null;
        this.selectedTargetCountry = null;
        this.timezoneCache = new Map(); // 时区数据缓存
        this.cacheExpiry = 5 * 60 * 1000; // 缓存5分钟
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.generateTimeInputs();
        this.updateMainTimeStatus();
        this.initRegionSelector();
    }

    bindEvents() {
        document.getElementById('setMainTime').addEventListener('click', () => {
            this.setMainTime();
        });

        // 目标国家现在通过点击搜索结果自动添加，不需要单独的添加按钮

        // 主国家搜索功能
        const mainSearch = document.getElementById('mainCountrySearch');
        const mainDropdown = document.getElementById('mainCountryDropdown');
        
        mainSearch.addEventListener('input', (e) => {
            this.showCountryDropdown(e.target.value, mainDropdown, 'main');
        });

        mainSearch.addEventListener('focus', () => {
            if (mainSearch.value) {
                this.showCountryDropdown(mainSearch.value, mainDropdown, 'main');
            }
        });

        // 目标国家搜索功能
        const targetSearch = document.getElementById('targetCountrySearch');
        const targetDropdown = document.getElementById('targetCountryDropdown');
        
        targetSearch.addEventListener('input', (e) => {
            this.showCountryDropdown(e.target.value, targetDropdown, 'target');
        });

        targetSearch.addEventListener('focus', () => {
            if (targetSearch.value) {
                this.showCountryDropdown(targetSearch.value, targetDropdown, 'target');
            }
        });

        // 点击外部关闭下拉框
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.input-group')) {
                mainDropdown.classList.remove('show');
                targetDropdown.classList.remove('show');
            }
        });

        // 时间个数变化事件
        document.getElementById('timeCount').addEventListener('change', () => {
            this.generateTimeInputs();
        });

        // 预设按钮事件
        document.getElementById('presetAG').addEventListener('click', () => {
            this.applyPresetAG();
        });

        document.getElementById('presetSW').addEventListener('click', () => {
            this.applyPresetSW();
        });

        document.getElementById('presetNewEra').addEventListener('click', () => {
            this.applyPresetNewEra();
        });

        document.getElementById('presetPictetEurope').addEventListener('click', () => {
            this.applyPresetPictetEurope();
        });

        document.getElementById('presetPictetSouthAmerica').addEventListener('click', () => {
            this.applyPresetPictetSouthAmerica();
        });

        document.getElementById('presetPictetOceania').addEventListener('click', () => {
            this.applyPresetPictetOceania();
        });

        document.getElementById('presetPictetAsia').addEventListener('click', () => {
            this.applyPresetPictetAsia();
        });
    }

    generateTimeInputs() {
        const container = document.getElementById('mainTimesContainer');
        const timeCount = parseInt(document.getElementById('timeCount').value) || 2;
        
        container.innerHTML = '';
        
        for (let i = 1; i <= timeCount; i++) {
            const timeGroup = document.createElement('div');
            timeGroup.className = 'time-input-group';
            timeGroup.innerHTML = `
                <label>时间 ${i}:</label>
                <div class="time-input">
                    <input type="text" maxlength="2" placeholder="13" class="hour-input" data-index="${i-1}">
                    <span class="colon">:</span>
                    <input type="text" maxlength="2" placeholder="00" class="minute-input" data-index="${i-1}">
                </div>
            `;
            container.appendChild(timeGroup);
        }

        // 绑定时间输入事件
        container.querySelectorAll('.hour-input, .minute-input').forEach(input => {
            input.addEventListener('input', (e) => {
                this.handleTimeInput(e);
            });
            
            input.addEventListener('keydown', (e) => {
                this.handleTimeKeydown(e);
            });
        });
    }

    handleTimeInput(e) {
        const value = e.target.value;
        const isHour = e.target.classList.contains('hour-input');
        
        // 只允许数字
        e.target.value = value.replace(/[^0-9]/g, '');
        
        // 自动跳转到下一个输入框
        if (value.length === 2) {
            const nextInput = e.target.parentElement.querySelector(isHour ? '.minute-input' : '.hour-input');
            if (nextInput) {
                nextInput.focus();
            }
        }
    }

    handleTimeKeydown(e) {
        // 处理退格键
        if (e.key === 'Backspace' && e.target.value === '') {
            const prevInput = e.target.parentElement.querySelector(e.target.classList.contains('hour-input') ? '.minute-input' : '.hour-input');
            if (prevInput) {
                prevInput.focus();
            }
        }
    }


    // 根据城市的时区和国旗查找对应的国家名称
    getCountryNameForCity(cityKey, cityData) {
        if (!cityData.city) return null;
        
        // 查找具有相同时区和国旗的国家（非城市）
        const matchingCountry = Object.keys(countryTimezones).find(key => {
            const countryData = countryTimezones[key];
            return !countryData.city && 
                   countryData.timezone === cityData.timezone && 
                   countryData.flag === cityData.flag;
        });
        
        return matchingCountry || null;
    }

    showCountryDropdown(searchTerm, dropdown, type) {
        if (!searchTerm.trim()) {
            dropdown.classList.remove('show');
            return;
        }

        const searchLower = searchTerm.toLowerCase();
        const filteredCountries = Object.keys(countryTimezones).filter(key => {
            const data = countryTimezones[key];
            return key.toLowerCase().includes(searchLower) ||
                   data.displayName.toLowerCase().includes(searchLower) ||
                   (data.city && data.displayName.toLowerCase().includes(searchLower));
        });

        // 排序：城市优先，然后按匹配度
        filteredCountries.sort((a, b) => {
            const aData = countryTimezones[a];
            const bData = countryTimezones[b];
            const aIsCity = aData.city || false;
            const bIsCity = bData.city || false;
            
            if (aIsCity && !bIsCity) return -1;
            if (!aIsCity && bIsCity) return 1;
            
            // 如果都是城市或都不是城市，按名称匹配度排序
            const aStartsWith = a.toLowerCase().startsWith(searchLower) || aData.displayName.toLowerCase().startsWith(searchLower);
            const bStartsWith = b.toLowerCase().startsWith(searchLower) || bData.displayName.toLowerCase().startsWith(searchLower);
            
            if (aStartsWith && !bStartsWith) return -1;
            if (!aStartsWith && bStartsWith) return 1;
            
            return a.localeCompare(b);
        });

        dropdown.innerHTML = '';
        
        if (filteredCountries.length === 0) {
            dropdown.innerHTML = '<div class="dropdown-item">未找到匹配的城市或国家</div>';
        } else {
            filteredCountries.slice(0, 20).forEach(key => { // 限制显示20个结果
                const data = countryTimezones[key];
                const item = document.createElement('div');
                item.className = 'dropdown-item';
                
                // 如果是城市，查找对应的国家名称
                let countryLabel = '';
                if (data.city) {
                    const countryName = this.getCountryNameForCity(key, data);
                    if (countryName) {
                        countryLabel = `<span class="country-badge">${countryName}</span>`;
                    }
                }
                
                const cityLabel = data.city ? '<span class="city-badge">城市</span>' : '';
                // 如果displayName包含英文说明，显示更详细的信息
                const displayText = data.displayName !== key ? data.displayName : key;
                item.innerHTML = `
                    <span class="country-flag">${data.flag}</span>
                    <span class="country-name">${key}</span>
                    <span class="timezone-info">${displayText}</span>
                    ${countryLabel}
                    ${cityLabel}
                `;
                
                item.addEventListener('click', () => {
                    if (type === 'main') {
                        this.selectMainCountry(key);
                        dropdown.classList.remove('show');
                    } else {
                        this.selectTargetCountry(key);
                        this.addTargetCountry();
                        dropdown.classList.remove('show');
                    }
                });
                
                dropdown.appendChild(item);
            });
        }
        
        dropdown.classList.add('show');
    }

    selectMainCountry(country) {
        this.selectedMainCountry = country;
        this.mainCountry = country;
        document.getElementById('mainCountrySearch').value = country;
        this.updateMainTimeInput();
        
        // 更新状态栏
        this.updateCountryStatus();
        this.updateTimezoneStatus();
        
        // 显示选择成功提示
        this.showMainCountrySelected(country);
    }

    showMainCountrySelected(country) {
        // 移除现有的选择提示
        const existingSuccess = document.querySelector('.main-selected');
        if (existingSuccess) {
            existingSuccess.remove();
        }
        
        // 创建选择成功提示
        const successDiv = document.createElement('div');
        successDiv.className = 'main-selected';
        successDiv.innerHTML = `
            <span class="icon"><i class="fas fa-check-circle"></i></span>
            <span>已选择 ${countryTimezones[country].flag} ${country}</span>
        `;
        
        // 将提示添加到主国家区域
        const mainSection = document.querySelector('.section:first-of-type');
        mainSection.appendChild(successDiv);
        
        // 3秒后自动移除提示
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 3000);
    }

    selectTargetCountry(country) {
        this.selectedTargetCountry = country;
        document.getElementById('targetCountrySearch').value = country;
    }

    updateMainTimeInput() {
        const mainCountry = this.selectedMainCountry;
        
        if (mainCountry && countryTimezones[mainCountry]) {
            // 获取当前该时区的时间
            const now = new Date();
            const timezone = countryTimezones[mainCountry].timezone;
            
            // 转换为该时区的本地时间格式
            const localTime = new Date(now.toLocaleString("en-US", {timeZone: timezone}));
            const hours = String(localTime.getHours()).padStart(2, '0');
            const minutes = String(localTime.getMinutes()).padStart(2, '0');
            
            // 设置第一个时间输入框的默认值
            const firstTimeInput = document.querySelector('.time-input');
            if (firstTimeInput) {
                const hourInput = firstTimeInput.querySelector('.hour-input');
                const minuteInput = firstTimeInput.querySelector('.minute-input');
                if (hourInput && minuteInput) {
                    hourInput.value = hours;
                    minuteInput.value = minutes;
                }
            }
        }
    }

    async setMainTime() {
        const mainCountry = this.selectedMainCountry;
        
        if (!mainCountry) {
            this.showError('请选择主国家');
            return;
        }
        
        // 获取所有输入的时间
        const timeInputs = document.querySelectorAll('.time-input');
        const times = [];
        
        timeInputs.forEach((timeInput, index) => {
            const hourInput = timeInput.querySelector('.hour-input');
            const minuteInput = timeInput.querySelector('.minute-input');
            
            const hour = parseInt(hourInput.value) || 0;
            const minute = parseInt(minuteInput.value) || 0;
            
            if (hourInput.value || minuteInput.value) {
                // 验证时间有效性
                if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59) {
                    const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
                    times.push(timeString);
                } else {
                    this.showError(`时间 ${index + 1} 格式不正确`);
                    return;
                }
            }
        });
        
        if (times.length === 0) {
            this.showError('请至少输入一个时间');
            return;
        }
        
        this.mainCountry = mainCountry;
        this.mainTimes = times;
        
        this.updateMainTimeStatus();
        await this.convertTimes();
    }

    async addTargetCountry() {
        const targetCountry = this.selectedTargetCountry;
        
        if (!targetCountry) {
            this.showError('请选择目标国家');
            return;
        }
        
        if (targetCountry === this.mainCountry) {
            this.showError('目标国家不能与主国家相同');
            return;
        }
        
        if (this.targetCountries.includes(targetCountry)) {
            this.showError('该国家已存在');
            return;
        }
        
        this.targetCountries.push(targetCountry);
        this.displayTargetList();
        await this.convertTimes();
        
        // 清空搜索框
        document.getElementById('targetCountrySearch').value = '';
        this.selectedTargetCountry = null;
        
        // 显示添加成功提示
        this.showAddSuccess(targetCountry);
    }

    showAddSuccess(country) {
        // 移除现有的添加成功提示
        const existingSuccess = document.querySelector('.add-success-inline');
        if (existingSuccess) {
            existingSuccess.remove();
        }
        
        // 创建内联添加成功提示
        const successDiv = document.createElement('div');
        successDiv.className = 'add-success-inline';
        successDiv.innerHTML = `
            <span class="icon"><i class="fas fa-check-circle"></i></span>
            <span>已添加 ${countryTimezones[country].flag} ${country}</span>
        `;
        
        // 将提示添加到搜索框下方
        const targetCountriesDiv = document.querySelector('.target-countries');
        targetCountriesDiv.appendChild(successDiv);
        
        // 3秒后自动移除提示
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 3000);
    }

    displayTargetList() {
        const targetList = document.getElementById('targetList');
        targetList.innerHTML = '';
        
        this.targetCountries.forEach(country => {
            const targetItem = document.createElement('div');
            targetItem.className = 'target-item';
            targetItem.innerHTML = `
                <div class="country-info">
                    <span class="country-flag">${countryTimezones[country].flag}</span>
                    <span class="country-name">${country}</span>
                    <span class="utc-info">${countryTimezones[country].displayName}</span>
                </div>
                <button class="remove-btn" onclick="timeConverter.removeTargetCountry('${country}')">删除</button>
            `;
            targetList.appendChild(targetItem);
        });
    }

    async removeTargetCountry(country) {
        this.targetCountries = this.targetCountries.filter(c => c !== country);
        this.displayTargetList();
        await this.convertTimes();
    }

    async convertTimes() {
        if (!this.mainCountry || !this.mainTimes.length || this.targetCountries.length === 0) {
            const results = document.getElementById('timeResults');
            if (results) {
                results.innerHTML = '<p class="no-data">请先设置主国家时间和目标国家</p>';
            }
            return;
        }
        
        const results = document.getElementById('timeResults');
        results.innerHTML = '';
        
        // 显示主时间
        const mainCard = document.createElement('div');
        mainCard.className = 'time-result-card';
        mainCard.dataset.country = this.mainCountry;
        mainCard.dataset.isMain = 'true';
        mainCard.innerHTML = `
            <div class="time-result-card-header">
                <h3>
                    ${countryTimezones[this.mainCountry].flag} ${countryTimezones[this.mainCountry].displayName} (主时间)
                    <span class="utc-info">查询中...</span>
                </h3>
                <button class="btn-copy" onclick="timeConverter.copyTimeCard(this.closest('.time-result-card'))" title="复制">
                    <i class="fas fa-copy"></i>
                </button>
            </div>
            <div class="multiple-times">
                ${this.mainTimes.map(time => `<span class="time-chip">${time}</span>`).join('')}
            </div>
        `;
        results.appendChild(mainCard);
        
        // 查询主时区的实时UTC偏移
        this.updateMainTimezoneInfo(mainCard);
        
        // 转换并显示目标国家时间
        const targetPromises = this.targetCountries.map(async (country) => {
            const targetCard = document.createElement('div');
            targetCard.className = 'time-result-card';
            
            // 显示加载状态
            targetCard.dataset.country = country;
            targetCard.dataset.isMain = 'false';
            targetCard.innerHTML = `
                <div class="time-result-card-header">
                    <h3>
                        ${countryTimezones[country].flag} ${countryTimezones[country].displayName}
                        <span class="utc-info">查询中...</span>
                    </h3>
                    <button class="btn-copy" onclick="timeConverter.copyTimeCard(this.closest('.time-result-card'))" title="复制">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
                <div class="multiple-times">
                    <span class="time-chip loading">转换中...</span>
                </div>
            `;
            results.appendChild(targetCard);
            
            try {
                // 转换所有主时间
                const convertedTimes = [];
                const sourceTimezone = countryTimezones[this.mainCountry].timezone;
                const sourceTimezoneData = await this.getTimezoneDataWithRetry(sourceTimezone);
                
                for (const mainTime of this.mainTimes) {
                    const [hours, minutes] = mainTime.split(':').map(Number);
                    const today = new Date();
                    
                    // 重要：创建源时区的本地时间
                    // 使用Intl API来创建表示源时区本地时间的Date对象
                    // 方法：创建一个UTC时间，使得在源时区显示为指定的hours:minutes
                    
                    // 获取今天的日期（UTC）
                    const year = today.getUTCFullYear();
                    const month = today.getUTCMonth();
                    const date = today.getUTCDate();
                    
                    // 创建一个UTC时间，表示源时区的本地时间
                    // 源时区本地时间 = UTC时间 + 源时区偏移
                    // 所以：UTC时间 = 源时区本地时间 - 源时区偏移
                    const sourceOffsetSeconds = sourceTimezoneData.utc_offset_seconds;
                    
                    // 创建一个Date对象，表示"源时区本地时间 hours:minutes"对应的UTC时间
                    // 使用Date.UTC创建UTC时间戳，然后减去源时区偏移
                    const utcTimestamp = Date.UTC(year, month, date, hours, minutes, 0) - (sourceOffsetSeconds * 1000);
                    const mainDateTime = new Date(utcTimestamp);
                    
                    const targetTime = await this.convertTime(mainDateTime, this.mainCountry, country);
                    convertedTimes.push(this.formatTimeSimple(targetTime));
                }
                
                // 获取目标时区的实时UTC偏移
                const targetTimezoneData = await this.getTimezoneDataWithRetry(countryTimezones[country].timezone);
                const utcOffset = this.formatUTCOffset(targetTimezoneData.utc_offset_seconds, targetTimezoneData.isFixedTimezone);
                
                // 获取时区状态标识
                const timezoneStatus = targetTimezoneData.isFixedTimezone ? '无夏令时' : '实时查询';
                
                // 先显示--:--状态
                const timesContainer = targetCard.querySelector('.multiple-times');
                if (timesContainer) {
                    const timeChips = timesContainer.querySelectorAll('.time-chip');
                    timeChips.forEach(chip => {
                        chip.textContent = '--:--';
                        chip.classList.add('loading');
                    });
                }

                // 短暂延迟后更新为实际数据
                setTimeout(() => {
                    // 更新显示结果
                    targetCard.innerHTML = `
                        <div class="time-result-card-header">
                            <h3>
                                ${countryTimezones[country].flag} ${countryTimezones[country].displayName}
                                <span class="utc-info">${utcOffset}</span>
                                <span class="timezone-status-header">${timezoneStatus}</span>
                            </h3>
                            <button class="btn-copy" onclick="timeConverter.copyTimeCard(this.closest('.time-result-card'))" title="复制">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="multiple-times">
                            ${convertedTimes.map(time => `<span class="time-chip">${time}</span>`).join('')}
                        </div>
                    `;
                }, 300); // 300ms延迟，让用户看到--:--状态
            } catch (error) {
                console.error('转换失败:', error);
                targetCard.innerHTML = `
                    <h3>
                        ${countryTimezones[country].flag} ${countryTimezones[country].displayName}
                        <span class="utc-info">(${countryTimezones[country].utcOffset})</span>
                    </h3>
                    <div class="multiple-times">
                        <span class="time-chip error">转换失败</span>
                    </div>
                `;
            }
        });
        
        // 等待所有目标国家处理完成
        await Promise.all(targetPromises);
    }

    formatTime24(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    formatTimeSimple(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    async convertTime(sourceTime, sourceCountry, targetCountry) {
        try {
            // 获取源时区和目标时区的UTC偏移
            const sourceTimezone = countryTimezones[sourceCountry].timezone;
            const targetTimezone = countryTimezones[targetCountry].timezone;
            
            const [sourceTimeData, targetTimeData] = await Promise.all([
                this.getTimezoneDataWithRetry(sourceTimezone),
                this.getTimezoneDataWithRetry(targetTimezone)
            ]);
            
            // 正确的时间转换逻辑：
            // sourceTime 是源时区的本地时间（例如：北京时间 12:00）
            // 需要先转换为 UTC，再转换为目标时区
            
            const sourceOffsetSeconds = sourceTimeData.utc_offset_seconds;
            const targetOffsetSeconds = targetTimeData.utc_offset_seconds;
            
            // 关键：sourceTime 是源时区的本地时间
            // 转换为UTC：需要减去源时区偏移（因为本地时间 = UTC + 偏移，所以 UTC = 本地时间 - 偏移）
            // 注意：JavaScript的Date对象内部存储的是UTC时间戳，但getTime()返回的是UTC时间戳
            // 所以我们需要手动处理时区偏移
            
            // 方法：将源时区的本地时间视为UTC+源偏移，然后转换为UTC，再转换为目标时区
            // 1. 将源时区本地时间转换为UTC时间戳
            //    假设 sourceTime 表示的是源时区的本地时间，我们需要计算对应的UTC时间
            //    使用更准确的方法：通过Intl API获取准确的UTC时间
            
            try {
                // 使用 Intl API 进行准确的时区转换
                // 创建一个表示源时区本地时间的字符串
                const sourceDateStr = sourceTime.toISOString().slice(0, 19); // "YYYY-MM-DDTHH:mm:ss"
                
                // 使用 Intl.DateTimeFormat 来解析和转换
                // 但更简单的方法是直接计算偏移
                
                // 关键理解：sourceTime 是一个 Date 对象，它表示的是浏览器本地时区的某个时间点
                // 但我们需要将它理解为"源时区的本地时间"
                // 所以：UTC时间戳 = sourceTime的时间戳 - 源时区偏移
                const utcTimestamp = sourceTime.getTime() - (sourceOffsetSeconds * 1000);
                
                // 然后转换为目标时区：目标时区本地时间 = UTC时间戳 + 目标时区偏移
                const targetTimestamp = utcTimestamp + (targetOffsetSeconds * 1000);
                const targetTime = new Date(targetTimestamp);
                
                console.log(`转换 ${sourceCountry} -> ${targetCountry}:`, {
                    sourceTimezone: sourceTimezone,
                    targetTimezone: targetTimezone,
                    sourceOffset: sourceOffsetSeconds,
                    targetOffset: targetOffsetSeconds,
                    sourceLocalTime: `${sourceTime.getHours()}:${sourceTime.getMinutes()}`,
                    utcTimestamp: new Date(utcTimestamp).toISOString(),
                    targetLocalTime: `${targetTime.getHours()}:${targetTime.getMinutes()}`,
                    targetTime: targetTime.toISOString()
                });
                
                return targetTime;
            } catch (error) {
                // 如果出错，使用简单的偏移计算
                const timezoneDifference = targetOffsetSeconds - sourceOffsetSeconds;
                const targetTime = new Date(sourceTime.getTime() + (timezoneDifference * 1000));
                
                console.log(`使用简单偏移计算 ${sourceCountry} -> ${targetCountry}:`, {
                    sourceOffset: sourceOffsetSeconds,
                    targetOffset: targetOffsetSeconds,
                    difference: timezoneDifference,
                    targetTime: targetTime.toISOString()
                });
                
                return targetTime;
            }
        } catch (error) {
            console.error('时区转换失败，使用备用方法:', error);
            // 备用方法：使用简化的时区转换
            return this.convertTimeFallback(sourceTime, sourceCountry, targetCountry);
        }
    }

    async getTimezoneDataWithRetry(timezone, maxRetries = 3, retryDelay = 1000) {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                return await this.getTimezoneData(timezone);
            } catch (error) {
                console.error(`第${attempt}次查询时区数据失败 ${timezone}:`, error);
                
                if (attempt === maxRetries) {
                    // 如果API失败，尝试使用备用方法
                    console.warn(`API查询失败，使用备用方法计算时区 ${timezone}`);
                    const fallbackOffset = this.getTimezoneOffsetMinutes(timezone) * 60;
                    return {
                        utc_offset_seconds: fallbackOffset,
                        timezone: timezone,
                        isFixedTimezone: false
                    };
                }
                
                // 等待1秒后重试（减少等待时间）
                await new Promise(resolve => setTimeout(resolve, retryDelay));
            }
        }
    }

    async getTimezoneData(timezone) {
        // 检查缓存
        const cacheKey = timezone;
        const cached = this.timezoneCache.get(cacheKey);
        if (cached && (Date.now() - cached.timestamp) < this.cacheExpiry) {
            console.log(`使用缓存的时区数据 ${timezone}:`, cached.data);
            return cached.data;
        }
        
        // 有夏令时的时区列表 - 必须使用实时查询
        const dstTimezones = [
            // 北美（有夏令时）
            'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
            'America/Phoenix', 'America/Anchorage', 'America/Toronto', 'America/Vancouver',
            'America/Winnipeg', 'America/Edmonton', 'America/Halifax', 'America/St_Johns',
            'America/Mexico_City', 'America/Cancun', 'America/Tijuana', 'America/Havana',
            
            // 欧洲（有夏令时）
            'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Rome', 'Europe/Madrid',
            'Europe/Amsterdam', 'Europe/Brussels', 'Europe/Vienna', 'Europe/Prague',
            'Europe/Warsaw', 'Europe/Stockholm', 'Europe/Copenhagen', 'Europe/Oslo',
            'Europe/Helsinki', 'Europe/Athens', 'Europe/Lisbon', 'Europe/Dublin',
            'Europe/Budapest', 'Europe/Bucharest', 'Europe/Sofia', 'Europe/Zagreb',
            'Europe/Belgrade', 'Europe/Kiev', 'Europe/Riga', 'Europe/Tallinn',
            'Europe/Vilnius', 'Europe/Luxembourg', 'Europe/Monaco', 'Europe/Andorra',
            'Europe/San_Marino', 'Europe/Vatican', 'Europe/Malta', 'Europe/Zurich',
            'Europe/Bratislava', 'Europe/Ljubljana',
            
            // 大洋洲（有夏令时）
            'Australia/Sydney', 'Australia/Melbourne', 'Australia/Brisbane', 'Australia/Adelaide',
            'Australia/Perth', 'Australia/Darwin', 'Australia/Hobart', 'Pacific/Auckland',
            
            // 南美（部分有夏令时）
            'America/Santiago', 'America/Sao_Paulo', 'America/Montevideo', 'America/Argentina/Buenos_Aires',
            
            // 其他
            'Asia/Jerusalem', 'Asia/Beirut', 'Asia/Damascus', 'Asia/Nicosia',
            'Atlantic/Azores', 'Atlantic/Canary', 'Atlantic/Madeira',
            
            // 亚洲城市（有夏令时）
            'Asia/Taipei', 'Asia/Hong_Kong',
            
            // 非洲（有夏令时）
            'Africa/Casablanca', // 摩洛哥
            'Africa/Cairo' // 埃及
        ];
        
        // 如果是有夏令时的时区，强制使用实时查询，跳过固定时区检查
        const hasDST = dstTimezones.includes(timezone);
        
        // 固定时区国家列表 - 不参与实时查询（不使用夏令时的国家）
        const fixedTimezones = {
            // 亚洲固定时区
            'Asia/Shanghai': 28800, // 中国 UTC+8
            'Asia/Hong_Kong': 28800, // 香港 UTC+8
            'Asia/Macau': 28800, // 澳门 UTC+8
            'Asia/Tokyo': 32400, // 日本 UTC+9
            'Asia/Seoul': 32400, // 韩国 UTC+9
            'Asia/Singapore': 28800, // 新加坡 UTC+8
            'Asia/Kuala_Lumpur': 28800, // 马来西亚 UTC+8
            'Asia/Bangkok': 25200, // 泰国 UTC+7
            'Asia/Ho_Chi_Minh': 25200, // 越南 UTC+7
            'Asia/Kolkata': 19800, // 印度 UTC+5:30
            'Asia/Dubai': 14400, // 阿联酋 UTC+4
            'Asia/Riyadh': 10800, // 沙特阿拉伯 UTC+3
            'Asia/Manila': 28800, // 菲律宾 UTC+8
            'Asia/Kathmandu': 20700, // 尼泊尔 UTC+5:45
            'Asia/Qatar': 10800, // 卡塔尔 UTC+3
            'Asia/Kuwait': 10800, // 科威特 UTC+3
            'Asia/Muscat': 14400, // 阿曼 UTC+4
            'Asia/Karachi': 18000, // 巴基斯坦 UTC+5
            'Asia/Vientiane': 25200, // 老挝 UTC+7
            'Asia/Phnom_Penh': 25200, // 柬埔寨 UTC+7
            'Asia/Jakarta': 25200, // 印度尼西亚西部时间(WIB) UTC+7
            'Asia/Makassar': 28800, // 印度尼西亚中部时间(CIT) UTC+8
            'Asia/Jayapura': 32400, // 印度尼西亚东部时间(WIT) UTC+9
            'Asia/Brunei': 28800, // 文莱 UTC+8
            'Asia/Dili': 32400, // 东帝汶 UTC+9
            'Asia/Dhaka': 21600, // 孟加拉国 UTC+6
            'Asia/Colombo': 19800, // 斯里兰卡 UTC+5:30
            'Indian/Maldives': 18000, // 马尔代夫 UTC+5
            'Asia/Yangon': 23400, // 缅甸 UTC+6:30
            'Asia/Kabul': 16200, // 阿富汗 UTC+4:30
            'Asia/Tashkent': 18000, // 乌兹别克斯坦 UTC+5
            'Asia/Almaty': 21600, // 哈萨克斯坦 UTC+6
            'Asia/Bishkek': 21600, // 吉尔吉斯斯坦 UTC+6
            'Asia/Dushanbe': 18000, // 塔吉克斯坦 UTC+5
            'Asia/Ashgabat': 18000, // 土库曼斯坦 UTC+5
            'Asia/Pyongyang': 32400, // 朝鲜 UTC+9
            'Asia/Ulaanbaatar': 28800, // 蒙古 UTC+8
            'Asia/Thimphu': 21600, // 不丹 UTC+6
            'Asia/Baghdad': 10800, // 伊拉克 UTC+3
            'Asia/Tehran': 12600, // 伊朗 UTC+3:30
            'Asia/Amman': 10800, // 约旦 UTC+3
            'Asia/Tbilisi': 14400, // 格鲁吉亚 UTC+4
            'Asia/Yerevan': 14400, // 亚美尼亚 UTC+4
            'Asia/Baku': 14400, // 阿塞拜疆 UTC+4
            'Asia/Urumqi': 21600, // 乌鲁木齐 UTC+6
            'Asia/Taipei': 28800, // 台北 UTC+8
            'Asia/Hong_Kong': 28800, // 香港 UTC+8
            'Asia/Macau': 28800, // 澳门 UTC+8
            'America/Monterrey': -21600, // 蒙特雷 UTC-6
            'Africa/Casablanca': 3600, // 卡萨布兰卡 UTC+1
            'Africa/Lubumbashi': 7200, // 卢本巴希 UTC+2
            
            // 非洲固定时区
            'Africa/Johannesburg': 7200, // 南非 UTC+2
            'Africa/Lagos': 3600, // 尼日利亚 UTC+1
            'Africa/Kampala': 10800, // 乌干达 UTC+3
            'Africa/Accra': 0, // 加纳 UTC+0
            'Africa/Nairobi': 10800, // 肯尼亚 UTC+3
            'Africa/Algiers': 3600, // 阿尔及利亚 UTC+1
            'Africa/Tunis': 3600, // 突尼斯 UTC+1
            'Africa/Tripoli': 7200, // 利比亚 UTC+2
            'Africa/Khartoum': 7200, // 苏丹 UTC+2
            'Africa/Juba': 10800, // 南苏丹 UTC+3
            'Africa/Addis_Ababa': 10800, // 埃塞俄比亚 UTC+3
            'Africa/Asmara': 10800, // 厄立特里亚 UTC+3
            'Africa/Djibouti': 10800, // 吉布提 UTC+3
            'Africa/Mogadishu': 10800, // 索马里 UTC+3
            'Africa/Dar_es_Salaam': 10800, // 坦桑尼亚 UTC+3
            'Africa/Kigali': 7200, // 卢旺达 UTC+2
            'Africa/Bujumbura': 7200, // 布隆迪 UTC+2
            'Africa/Kinshasa': 3600, // 刚果民主共和国 UTC+1
            'Africa/Brazzaville': 3600, // 刚果共和国 UTC+1
            'Africa/Bangui': 3600, // 中非 UTC+1
            'Africa/Ndjamena': 3600, // 乍得 UTC+1
            'Africa/Douala': 3600, // 喀麦隆 UTC+1
            'Africa/Niamey': 3600, // 尼日尔 UTC+1
            'Africa/Porto-Novo': 3600, // 贝宁 UTC+1
            'Africa/Lome': 0, // 多哥 UTC+0
            'Africa/Ouagadougou': 0, // 布基纳法索 UTC+0
            'Africa/Bamako': 0, // 马里 UTC+0
            'Africa/Dakar': 0, // 塞内加尔 UTC+0
            'Africa/Banjul': 0, // 冈比亚 UTC+0
            'Africa/Bissau': 0, // 几内亚比绍 UTC+0
            'Africa/Conakry': 0, // 几内亚 UTC+0
            'Africa/Freetown': 0, // 塞拉利昂 UTC+0
            'Africa/Monrovia': 0, // 利比里亚 UTC+0
            'Africa/Abidjan': 0, // 科特迪瓦 UTC+0
            'Africa/Libreville': 3600, // 加蓬 UTC+1
            'Africa/Malabo': 3600, // 赤道几内亚 UTC+1
            'Africa/Sao_Tome': 0, // 圣多美和普林西比 UTC+0
            'Africa/Luanda': 3600, // 安哥拉 UTC+1
            'Africa/Lusaka': 7200, // 赞比亚 UTC+2
            'Africa/Harare': 7200, // 津巴布韦 UTC+2
            'Africa/Gaborone': 7200, // 博茨瓦纳 UTC+2
            'Africa/Windhoek': 7200, // 纳米比亚 UTC+2
            'Africa/Maseru': 7200, // 莱索托 UTC+2
            'Africa/Mbabane': 7200, // 斯威士兰 UTC+2
            'Indian/Antananarivo': 10800, // 马达加斯加 UTC+3
            'Indian/Mauritius': 14400, // 毛里求斯 UTC+4
            'Indian/Mahe': 14400, // 塞舌尔 UTC+4
            'Indian/Comoro': 10800, // 科摩罗 UTC+3
            'Indian/Mayotte': 10800, // 马约特 UTC+3
            'Indian/Reunion': 14400, // 留尼汪 UTC+4
            
            // 美洲固定时区
            'America/Argentina/Buenos_Aires': -10800, // 阿根廷 UTC-3
            'America/Bogota': -18000, // 哥伦比亚 UTC-5
            'America/Lima': -18000, // 秘鲁 UTC-5
            'America/La_Paz': -14400, // 玻利维亚 UTC-4
            'America/Caracas': -14400, // 委内瑞拉 UTC-4
            'America/Guyana': -14400, // 圭亚那 UTC-4
            'America/Paramaribo': -10800, // 苏里南 UTC-3
            'America/Cayenne': -10800, // 法属圭亚那 UTC-3
            'America/Montevideo': -10800, // 乌拉圭 UTC-3
            'America/Asuncion': -14400, // 巴拉圭 UTC-4
            'America/Guatemala': -21600, // 危地马拉 UTC-6
            'America/Belize': -21600, // 伯利兹 UTC-6
            'America/El_Salvador': -21600, // 萨尔瓦多 UTC-6
            'America/Tegucigalpa': -21600, // 洪都拉斯 UTC-6
            'America/Managua': -21600, // 尼加拉瓜 UTC-6
            'America/Costa_Rica': -21600, // 哥斯达黎加 UTC-6
            'America/Panama': -18000, // 巴拿马 UTC-5
            'America/Jamaica': -18000, // 牙买加 UTC-5
            'America/Port-au-Prince': -14400, // 海地 UTC-4
            'America/Santo_Domingo': -14400, // 多米尼加 UTC-4
            'America/Puerto_Rico': -14400, // 波多黎各 UTC-4
            'America/Port_of_Spain': -14400, // 特立尼达和多巴哥 UTC-4
            'America/Barbados': -14400, // 巴巴多斯 UTC-4
            'America/St_Kitts': -14400, // 圣基茨和尼维斯 UTC-4
            'America/Antigua': -14400, // 安提瓜和巴布达 UTC-4
            'America/Dominica': -14400, // 多米尼克 UTC-4
            'America/St_Lucia': -14400, // 圣卢西亚 UTC-4
            'America/St_Vincent': -14400, // 圣文森特和格林纳丁斯 UTC-4
            'America/Grenada': -14400, // 格林纳达 UTC-4
            
            // 大洋洲固定时区
            'Pacific/Tongatapu': 46800, // 汤加 UTC+13
            'Pacific/Efate': 39600, // 瓦努阿图 UTC+11
            'Pacific/Palau': 32400, // 帕劳 UTC+9
            'Pacific/Majuro': 43200, // 马绍尔群岛 UTC+12
            'Pacific/Port_Moresby': 36000, // 巴布亚新几内亚 UTC+10
            'Pacific/Guadalcanal': 39600, // 所罗门群岛 UTC+11
            'Pacific/Noumea': 39600, // 新喀里多尼亚 UTC+11
            'Pacific/Tarawa': 43200, // 基里巴斯 UTC+12
            'Pacific/Kiritimati': 50400, // 基里巴斯/东部 UTC+14
            'Pacific/Funafuti': 43200, // 图瓦卢 UTC+12
            'Pacific/Nauru': 43200, // 瑙鲁 UTC+12
            'Pacific/Chuuk': 36000, // 密克罗尼西亚/楚克州 UTC+10
            'Pacific/Pohnpei': 39600, // 密克罗尼西亚/波纳佩州 UTC+11
            'Pacific/Guam': 36000, // 关岛 UTC+10
            'Pacific/Saipan': 36000, // 北马里亚纳群岛 UTC+10
            'Pacific/Pago_Pago': -39600, // 美属萨摩亚 UTC-11
            'Pacific/Rarotonga': -36000, // 库克群岛 UTC-10
            'Pacific/Tahiti': -36000, // 法属波利尼西亚 UTC-10
            'Pacific/Pitcairn': -32400, // 皮特凯恩群岛 UTC-9
            'Pacific/Easter': -21600, // 复活节岛 UTC-6
            'Pacific/Galapagos': -21600, // 加拉帕戈斯群岛 UTC-6
            'Pacific/Honolulu': -36000, // 夏威夷 UTC-10
            
            // 欧洲固定时区
            'Atlantic/Reykjavik': 0, // 冰岛 UTC+0
            'Europe/Minsk': 10800, // 白俄罗斯 UTC+3
            'Europe/Istanbul': 10800, // 土耳其 UTC+3
            
            // 俄罗斯固定时区
            'Europe/Kaliningrad': 7200, // 俄罗斯/加里宁格勒 UTC+2
            'Europe/Moscow': 10800, // 俄罗斯/莫斯科 UTC+3
            'Europe/Samara': 14400, // 俄罗斯/萨马拉 UTC+4
            'Asia/Yekaterinburg': 18000, // 俄罗斯/叶卡捷琳堡 UTC+5
            'Asia/Novosibirsk': 21600, // 俄罗斯/新西伯利亚 UTC+6
            'Asia/Krasnoyarsk': 25200, // 俄罗斯/克拉斯诺亚尔斯克 UTC+7
            'Asia/Irkutsk': 28800, // 俄罗斯/伊尔库茨克 UTC+8
            'Asia/Yakutsk': 32400, // 俄罗斯/雅库茨克 UTC+9
            'Asia/Vladivostok': 36000, // 俄罗斯/符拉迪沃斯托克 UTC+10
            'Asia/Magadan': 39600, // 俄罗斯/马加丹 UTC+11
            'Asia/Kamchatka': 43200, // 俄罗斯/堪察加 UTC+12
        };
        
        // 检查是否为固定时区（如果是有夏令时的时区，跳过此检查）
        if (!hasDST && fixedTimezones[timezone] !== undefined) {
            const data = {
                utc_offset_seconds: fixedTimezones[timezone],
                timezone: timezone,
                isFixedTimezone: true
            };
            // 缓存固定时区数据
            this.timezoneCache.set(cacheKey, {
                data: data,
                timestamp: Date.now()
            });
            console.log(`使用固定时区数据 ${timezone}:`, data);
            return data;
        }
        
        // 非固定时区或有夏令时的时区，使用实时查询
        // 使用多个API源，按顺序尝试
        const timeout = 5000; // 5秒超时
        
        // 创建带超时的fetch函数
        const fetchWithTimeout = async (url, options = {}) => {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);
            try {
                const response = await fetch(url, {
                    ...options,
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                return response;
            } catch (error) {
                clearTimeout(timeoutId);
                throw error;
            }
        };
        
        const apiSources = [
            // API 1: 浏览器原生 Intl API (最准确，优先使用)
            async () => {
                try {
                    // 使用最可靠的方法：创建一个固定的UTC时间点，然后获取它在指定时区的显示时间
                    // 通过比较计算偏移
                    
                    // 创建一个已知的UTC时间（2024-01-01 12:00:00 UTC）
                    const testDate = new Date('2024-01-01T12:00:00Z');
                    
                    // 获取该UTC时间在指定时区的显示时间字符串
                    const tzString = testDate.toLocaleString('en-US', {
                        timeZone: timezone,
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false
                    });
                    
                    // 获取UTC时间的显示字符串
                    const utcString = testDate.toLocaleString('en-US', {
                        timeZone: 'UTC',
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false
                    });
                    
                    // 解析时间字符串为Date对象
                    // 格式: "01/01/2024, 12:00:00"
                    const parseDateTime = (dateStr) => {
                        const [datePart, timePart] = dateStr.split(', ');
                        const [month, day, year] = datePart.split('/').map(Number);
                        const [hour, minute, second] = timePart.split(':').map(Number);
                        return new Date(Date.UTC(year, month - 1, day, hour, minute, second));
                    };
                    
                    const tzTime = parseDateTime(tzString);
                    const utcTime = parseDateTime(utcString);
                    
                    // 计算偏移：时区时间 - UTC时间
                    const offsetMs = tzTime.getTime() - utcTime.getTime();
                    const offsetSeconds = Math.round(offsetMs / 1000);
                    
                    console.log(`✓ Intl API 计算时区偏移 ${timezone}: ${offsetSeconds}秒 (UTC${offsetSeconds >= 0 ? '+' : ''}${Math.floor(offsetSeconds/3600)}:${Math.abs(Math.floor((offsetSeconds%3600)/60)).toString().padStart(2, '0')})`);
                    
                    return offsetSeconds;
                } catch (error) {
                    console.warn(`Intl API 查询失败 ${timezone}:`, error);
                    throw error;
                }
            },
            // API 2: WorldTimeAPI (备用1)
            async () => {
                const response = await fetchWithTimeout(`https://worldtimeapi.org/api/timezone/${timezone}`, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                
                const offset = data.utc_offset;
                if (!offset || typeof offset !== 'string') {
                    throw new Error(`WorldTimeAPI 返回的 utc_offset 格式异常: ${offset}`);
                }
                
                const offsetMatch = offset.match(/^([+-]?)(\d{1,2}):(\d{2})$/);
                if (!offsetMatch) {
                    throw new Error(`UTC偏移格式无法解析: ${offset}`);
                }
                
                const [, sign, hoursStr, minutesStr] = offsetMatch;
                const hours = parseInt(hoursStr, 10);
                const minutes = parseInt(minutesStr, 10);
                const isNegative = sign === '-';
                
                if (isNaN(hours) || isNaN(minutes)) {
                    throw new Error(`无法解析UTC偏移数字: ${offset}`);
                }
                
                const offsetSeconds = (isNegative ? -1 : 1) * (hours * 3600 + minutes * 60);
                console.log(`WorldTimeAPI 返回 ${timezone}: ${offset} -> ${offsetSeconds}秒`);
                return offsetSeconds;
            },
            // API 2: WorldTimeAPI (备用1)
            async () => {
                const response = await fetchWithTimeout(`https://worldtimeapi.org/api/timezone/${timezone}`, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                
                const offset = data.utc_offset;
                if (!offset || typeof offset !== 'string') {
                    throw new Error(`WorldTimeAPI 返回的 utc_offset 格式异常: ${offset}`);
                }
                
                const offsetMatch = offset.match(/^([+-]?)(\d{1,2}):(\d{2})$/);
                if (!offsetMatch) {
                    throw new Error(`UTC偏移格式无法解析: ${offset}`);
                }
                
                const [, sign, hoursStr, minutesStr] = offsetMatch;
                const hours = parseInt(hoursStr, 10);
                const minutes = parseInt(minutesStr, 10);
                const isNegative = sign === '-';
                
                if (isNaN(hours) || isNaN(minutes)) {
                    throw new Error(`无法解析UTC偏移数字: ${offset}`);
                }
                
                return (isNegative ? -1 : 1) * (hours * 3600 + minutes * 60);
            },
            // API 3: TimeAPI.io (备用2)
            async () => {
                const response = await fetchWithTimeout(`https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                // TimeAPI.io 返回格式不同，需要计算偏移
                const now = new Date();
                const utcTime = new Date(now.toUTCString());
                const localTime = new Date(data.dateTime);
                const offsetMs = localTime.getTime() - utcTime.getTime();
                return Math.round(offsetMs / 1000);
            },
            // API 4: time.is 备用查询（使用不同的端点）
            async () => {
                // 尝试使用 time.is 的另一个查询方式
                const response = await fetchWithTimeout(`https://time.is/api/time?tz=${encodeURIComponent(timezone)}`, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                if (data.utc_offset) {
                    const offset = data.utc_offset;
                    if (typeof offset !== 'string') {
                        throw new Error(`time.is API 返回的 utc_offset 格式异常: ${offset}`);
                    }
                    
                    const offsetMatch = offset.match(/^([+-]?)(\d{1,2}):(\d{2})$/);
                    if (!offsetMatch) {
                        throw new Error(`time.is API UTC偏移格式无法解析: ${offset}`);
                    }
                    
                    const [, sign, hoursStr, minutesStr] = offsetMatch;
                    const hours = parseInt(hoursStr, 10);
                    const minutes = parseInt(minutesStr, 10);
                    const isNegative = sign === '-';
                    
                    if (isNaN(hours) || isNaN(minutes)) {
                        throw new Error(`time.is API 无法解析UTC偏移数字: ${offset}`);
                    }
                    
                    return (isNegative ? -1 : 1) * (hours * 3600 + minutes * 60);
                }
                throw new Error('time.is API 返回格式异常：缺少 utc_offset 字段');
            }
        ];
        
        // 已知时区的正确偏移值（用于验证和备用）
        // 注意：有夏令时的时区，这里存储的是标准时间偏移，实际值会根据当前日期变化
        const knownTimezoneOffsets = {
            // 中东时区（无夏令时）
            'Asia/Bahrain': 10800,   // UTC+3
            'Asia/Kuwait': 10800,    // UTC+3
            'Asia/Qatar': 10800,     // UTC+3
            'Asia/Riyadh': 10800,    // UTC+3
            'Asia/Dubai': 14400,     // UTC+4
            'Asia/Muscat': 14400,    // UTC+4
            'Asia/Tehran': 12600,    // UTC+3:30
            'Asia/Kolkata': 19800,   // UTC+5:30
            'Asia/Kathmandu': 20700, // UTC+5:45
            'Asia/Yangon': 23400,    // UTC+6:30
            
            // 欧洲时区（有夏令时，标准时间）
            'Europe/Sofia': 7200,    // UTC+2 (标准时间), UTC+3 (夏令时)
            'Europe/Bucharest': 7200, // UTC+2 (标准时间), UTC+3 (夏令时)
            'Europe/Budapest': 3600,  // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Prague': 3600,    // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Warsaw': 3600,    // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Stockholm': 3600, // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Copenhagen': 3600, // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Oslo': 3600,     // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Helsinki': 7200, // UTC+2 (标准时间), UTC+3 (夏令时)
            'Europe/Athens': 7200,   // UTC+2 (标准时间), UTC+3 (夏令时)
            'Europe/Rome': 3600,     // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Madrid': 3600,   // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Paris': 3600,    // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Berlin': 3600,   // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/London': 0,      // UTC+0 (标准时间), UTC+1 (夏令时)
            'Europe/Amsterdam': 3600, // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Brussels': 3600, // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Vienna': 3600,   // UTC+1 (标准时间), UTC+2 (夏令时)
            'Europe/Zurich': 3600,   // UTC+1 (标准时间), UTC+2 (夏令时)
        };
        
        // 尝试所有API源
        let lastError = null;
        let lastOffset = null;
        for (let i = 0; i < apiSources.length; i++) {
            try {
                const utc_offset_seconds = await apiSources[i]();
                lastOffset = utc_offset_seconds;
                
                // 如果有时区已知值，进行验证
                if (knownTimezoneOffsets[timezone]) {
                    const expectedOffset = knownTimezoneOffsets[timezone];
                    const hasDST = dstTimezones.includes(timezone);
                    
                    // 对于有夏令时的时区，允许标准时间和夏令时两个值（相差1小时）
                    // 对于无夏令时的时区，只允许标准时间
                    let isValid = false;
                    if (hasDST) {
                        // 有夏令时：允许标准时间或夏令时（标准时间+3600秒）
                        // 检查是否在标准时间±1小时内，或在夏令时±1小时内
                        const standardTime = expectedOffset;
                        const daylightTime = expectedOffset + 3600;
                        isValid = (Math.abs(utc_offset_seconds - standardTime) <= 1800) || // 标准时间±30分钟
                                 (Math.abs(utc_offset_seconds - daylightTime) <= 1800);     // 夏令时±30分钟
                    } else {
                        // 无夏令时：只允许标准时间，容差1800秒（30分钟）
                        isValid = Math.abs(utc_offset_seconds - expectedOffset) <= 1800;
                    }
                    
                    if (!isValid) {
                        const expectedStr = hasDST ? 
                            `标准时间 ${expectedOffset}秒 (UTC${expectedOffset >= 0 ? '+' : ''}${expectedOffset/3600}) 或夏令时 ${expectedOffset + 3600}秒 (UTC+${(expectedOffset + 3600)/3600})` :
                            `${expectedOffset}秒 (UTC${expectedOffset >= 0 ? '+' : ''}${expectedOffset/3600})`;
                        
                        console.error(`⚠️ API ${i + 1} 返回的时区偏移不正确 ${timezone}: API返回 ${utc_offset_seconds}秒 (UTC${utc_offset_seconds >= 0 ? '+' : ''}${Math.floor(utc_offset_seconds/3600)}:${Math.abs(Math.floor((utc_offset_seconds%3600)/60)).toString().padStart(2, '0')}), 期望 ${expectedStr}`);
                        
                        // 如果API返回的值明显错误，抛出错误以尝试下一个API
                        if (!hasDST) {
                            // 无夏令时的时区，如果值错误，使用已知值
                            console.warn(`使用已知正确值 ${expectedOffset}秒 替代API返回值`);
                            const timezoneData = {
                                utc_offset_seconds: expectedOffset,
                                timezone: timezone,
                                isFixedTimezone: false
                            };
                            
                            this.timezoneCache.set(cacheKey, {
                                data: timezoneData,
                                timestamp: Date.now()
                            });
                            
                            return timezoneData;
                        } else {
                            // 有夏令时的时区，如果值明显错误，抛出错误尝试下一个API
                            throw new Error(`API返回的时区偏移值不在合理范围内`);
                        }
                    } else {
                        console.log(`✓ 时区偏移验证通过 ${timezone}: ${utc_offset_seconds}秒`);
                    }
                }
                
                const timezoneData = {
                    utc_offset_seconds: utc_offset_seconds,
                    timezone: timezone,
                    isFixedTimezone: false
                };
                
                // 缓存实时查询数据
                this.timezoneCache.set(cacheKey, {
                    data: timezoneData,
                    timestamp: Date.now()
                });
                
                console.log(`成功获取时区数据 ${timezone} (API ${i + 1}):`, {
                    utc_offset_seconds: utc_offset_seconds
                });
                
                return timezoneData;
            } catch (error) {
                console.warn(`API ${i + 1} 查询失败 ${timezone}:`, error);
                lastError = error;
                // 继续尝试下一个API
            }
        }
        
        // 如果所有API都失败，但有时区已知值，使用已知值
        if (knownTimezoneOffsets[timezone]) {
            console.warn(`所有API查询失败，使用已知时区偏移值 ${timezone}: ${knownTimezoneOffsets[timezone]}秒`);
            const timezoneData = {
                utc_offset_seconds: knownTimezoneOffsets[timezone],
                timezone: timezone,
                isFixedTimezone: false
            };
            
            // 缓存备用数据
            this.timezoneCache.set(cacheKey, {
                data: timezoneData,
                timestamp: Date.now()
            });
            
            return timezoneData;
        }
        
        // 所有API都失败，如果有夏令时，不允许使用备用方法
        if (hasDST) {
            throw new Error(`无法获取有夏令时的时区数据 ${timezone}，所有API查询均失败`);
        }
        
        // 对于非夏令时时区，使用备用方法
        console.warn(`所有API失败，使用备用方法计算时区 ${timezone}`);
        const fallbackOffset = this.getTimezoneOffsetMinutes(timezone) * 60;
        if (fallbackOffset !== 0) {
            const fallbackData = {
                utc_offset_seconds: fallbackOffset,
                timezone: timezone,
                isFixedTimezone: false
            };
            // 缓存备用数据
            this.timezoneCache.set(cacheKey, {
                data: fallbackData,
                timestamp: Date.now()
            });
            console.log(`使用备用时区数据 ${timezone}:`, fallbackData);
            return fallbackData;
        }
        
        throw lastError || new Error(`无法获取时区数据 ${timezone}`);
    }


    convertTimeFallback(sourceTime, sourceCountry, targetCountry) {
        // 备用转换方法
        const sourceOffsetMinutes = this.getTimezoneOffsetMinutes(countryTimezones[sourceCountry].timezone);
        const targetOffsetMinutes = this.getTimezoneOffsetMinutes(countryTimezones[targetCountry].timezone);
        const timezoneDifferenceMinutes = targetOffsetMinutes - sourceOffsetMinutes;
        return new Date(sourceTime.getTime() + (timezoneDifferenceMinutes * 60000));
    }

    async updateMainTimezoneInfo(mainCard) {
        try {
            const mainTimezoneData = await this.getTimezoneDataWithRetry(countryTimezones[this.mainCountry].timezone);
            const utcOffset = this.formatUTCOffset(mainTimezoneData.utc_offset_seconds, mainTimezoneData.isFixedTimezone);
            
            const utcInfoElement = mainCard.querySelector('.utc-info');
            if (utcInfoElement) {
                utcInfoElement.textContent = utcOffset;
            }
        } catch (error) {
            console.error('获取主时区信息失败:', error);
            const utcInfoElement = mainCard.querySelector('.utc-info');
            if (utcInfoElement) {
                utcInfoElement.textContent = error.message || '查询失败';
            }
        }
    }

    // 复制时间卡片内容到剪贴板
    copyTimeCard(card) {
        const country = card.dataset.country;
        const isMain = card.dataset.isMain === 'true';
        const timeChips = card.querySelectorAll('.time-chip:not(.loading):not(.error)');
        const times = Array.from(timeChips).map(chip => chip.textContent.trim()).filter(t => t && t !== '--:--');
        
        if (!country || times.length === 0) {
            this.showError('暂无有效时间可复制');
            return;
        }
        
        const title = isMain ? `${country} (主时间)` : `${country}交易时间`;
        let text = `• ${title}\n`;
        times.forEach((time, i) => {
            text += `信号${i + 1}:  ${time}\n`;
        });
        
        navigator.clipboard.writeText(text).then(() => {
            const btn = card.querySelector('.btn-copy');
            if (btn) {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i>';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.classList.remove('copied');
                }, 1500);
            }
            this.showSuccess('已复制到剪贴板');
        }).catch(() => {
            this.showError('复制失败');
        });
    }

    formatUTCOffset(offsetSeconds, isFixedTimezone = false) {
        // 确保offsetSeconds是数字
        if (typeof offsetSeconds !== 'number' || isNaN(offsetSeconds)) {
            console.error('formatUTCOffset: 无效的offsetSeconds:', offsetSeconds);
            return 'UTC+0';
        }
        
        // 计算小时和分钟
        const totalMinutes = Math.floor(Math.abs(offsetSeconds) / 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const sign = offsetSeconds >= 0 ? '+' : '-';
        
        // 验证结果是否合理
        if (hours > 14 || hours < -12) {
            console.warn(`formatUTCOffset: UTC偏移异常 ${offsetSeconds}秒 -> UTC${sign}${hours}:${minutes}`);
        }
        
        if (minutes === 0) {
            return `UTC${sign}${hours}`;
        } else {
            return `UTC${sign}${hours}:${minutes.toString().padStart(2, '0')}`;
        }
    }

    getTimezoneOffsetMinutes(timezone) {
        // 时区偏移计算（相对于UTC的分钟数）
        // 首先尝试从固定时区列表获取
        const fixedTimezones = {
            'Asia/Shanghai': 480, 'Asia/Hong_Kong': 480, 'Asia/Macau': 480,
            'Asia/Tokyo': 540, 'Asia/Seoul': 540, 'Asia/Singapore': 480,
            'Asia/Kuala_Lumpur': 480, 'Asia/Bangkok': 420, 'Asia/Ho_Chi_Minh': 420,
            'Asia/Kolkata': 330, 'Asia/Dubai': 240, 'Asia/Riyadh': 180,
            'Asia/Manila': 480, 'Asia/Jakarta': 420, 'Asia/Dhaka': 360,
            'America/New_York': -300, 'America/Los_Angeles': -480,
            'America/Chicago': -360, 'America/Denver': -420,
            'Europe/London': 0, 'Europe/Berlin': 60, 'Europe/Paris': 60,
            'Europe/Moscow': 180, 'Europe/Rome': 60, 'Europe/Madrid': 60,
            'Australia/Sydney': 600, 'Australia/Melbourne': 600,
            'America/Sao_Paulo': -180, 'America/Toronto': -300,
            'America/Mexico_City': -360, 'America/Argentina/Buenos_Aires': -180,
            'Africa/Johannesburg': 120, 'Africa/Cairo': 120,
            'Asia/Dubai': 240, 'Asia/Karachi': 300, 'Asia/Tehran': 210,
            'Pacific/Auckland': 720, 'Pacific/Honolulu': -600
        };
        
        if (fixedTimezones[timezone] !== undefined) {
            return fixedTimezones[timezone];
        }
        
        // 如果不在列表中，尝试从timezone字符串推断（简单方法）
        // 这是一个备用方案，可能不够准确，但至少能工作
        const timezoneLower = timezone.toLowerCase();
        if (timezoneLower.includes('asia')) {
            // 大多数亚洲时区在UTC+5到UTC+9之间
            if (timezoneLower.includes('tokyo') || timezoneLower.includes('seoul') || timezoneLower.includes('pyongyang')) {
                return 540; // UTC+9
            }
            if (timezoneLower.includes('shanghai') || timezoneLower.includes('singapore') || timezoneLower.includes('manila')) {
                return 480; // UTC+8
            }
            if (timezoneLower.includes('bangkok') || timezoneLower.includes('jakarta') || timezoneLower.includes('ho_chi_minh')) {
                return 420; // UTC+7
            }
            if (timezoneLower.includes('dhaka') || timezoneLower.includes('yangon')) {
                return 360; // UTC+6
            }
            if (timezoneLower.includes('karachi') || timezoneLower.includes('tashkent')) {
                return 300; // UTC+5
            }
            if (timezoneLower.includes('dubai') || timezoneLower.includes('muscat')) {
                return 240; // UTC+4
            }
            return 480; // 默认UTC+8
        } else if (timezoneLower.includes('europe')) {
            if (timezoneLower.includes('london') || timezoneLower.includes('dublin') || timezoneLower.includes('reykjavik')) {
                return 0; // UTC+0
            }
            if (timezoneLower.includes('berlin') || timezoneLower.includes('paris') || timezoneLower.includes('rome') || timezoneLower.includes('madrid')) {
                return 60; // UTC+1
            }
            if (timezoneLower.includes('moscow') || timezoneLower.includes('istanbul') || timezoneLower.includes('minsk')) {
                return 180; // UTC+3
            }
            return 60; // 默认UTC+1
        } else if (timezoneLower.includes('america')) {
            if (timezoneLower.includes('new_york') || timezoneLower.includes('toronto') || timezoneLower.includes('havana')) {
                return -300; // UTC-5
            }
            if (timezoneLower.includes('los_angeles') || timezoneLower.includes('vancouver') || timezoneLower.includes('tijuana')) {
                return -480; // UTC-8
            }
            if (timezoneLower.includes('chicago') || timezoneLower.includes('mexico_city')) {
                return -360; // UTC-6
            }
            if (timezoneLower.includes('denver') || timezoneLower.includes('phoenix')) {
                return -420; // UTC-7
            }
            if (timezoneLower.includes('sao_paulo') || timezoneLower.includes('buenos_aires')) {
                return -180; // UTC-3
            }
            return -300; // 默认UTC-5
        } else if (timezoneLower.includes('australia') || timezoneLower.includes('pacific')) {
            if (timezoneLower.includes('sydney') || timezoneLower.includes('melbourne') || timezoneLower.includes('auckland')) {
                return 600; // UTC+10
            }
            if (timezoneLower.includes('honolulu')) {
                return -600; // UTC-10
            }
            return 600; // 默认UTC+10
        } else if (timezoneLower.includes('africa')) {
            if (timezoneLower.includes('johannesburg') || timezoneLower.includes('cairo')) {
                return 120; // UTC+2
            }
            if (timezoneLower.includes('lagos') || timezoneLower.includes('kinshasa')) {
                return 60; // UTC+1
            }
            if (timezoneLower.includes('nairobi') || timezoneLower.includes('kampala')) {
                return 180; // UTC+3
            }
            return 120; // 默认UTC+2
        }
        
        return 0; // 如果无法推断，返回UTC+0
    }

    showError(message) {
        this.showMessage(message, 'error');
    }

    showSuccess(message) {
        this.showMessage(message, 'success');
    }

    showMessage(message, type) {
        // 移除现有弹窗
        const existingModal = document.querySelector('.modal-overlay');
        if (existingModal) {
            existingModal.remove();
        }
        
        // 创建弹窗遮罩层
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        
        // 创建弹窗内容
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        // 根据类型设置图标和颜色
        const icon = type === 'error' ? '⚠️' : '✅';
        const bgColor = type === 'error' ? '#fed7d7' : '#c6f6d5';
        const textColor = type === 'error' ? '#c53030' : '#2f855a';
        const borderColor = type === 'error' ? '#f56565' : '#48bb78';
        
        modalContent.innerHTML = `
            <div class="modal-icon">${icon}</div>
            <div class="modal-message">${message}</div>
            <button class="modal-close">确定</button>
        `;
        
        // 设置弹窗样式
        modalOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;
        
        modalContent.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            max-width: 400px;
            width: 90%;
            animation: modalSlideIn 0.3s ease-out;
        `;
        
        // 添加动画样式
        const style = document.createElement('style');
        style.textContent = `
            @keyframes modalSlideIn {
                from {
                    opacity: 0;
                    transform: scale(0.8) translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
            }
            .modal-icon {
                font-size: 2rem;
                margin-bottom: 15px;
            }
            .modal-message {
                font-size: 1.1rem;
                font-weight: 500;
                margin-bottom: 20px;
                color: #333;
            }
            .modal-close {
                background: #4a90e2;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 6px;
                font-size: 1rem;
                cursor: pointer;
                transition: background 0.2s;
            }
            .modal-close:hover {
                background: #357abd;
            }
        `;
        document.head.appendChild(style);
        
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
        
        // 点击确定按钮或遮罩层关闭弹窗
        const closeModal = () => {
            modalOverlay.remove();
            style.remove();
        };
        
        modalContent.querySelector('.modal-close').addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
        
        // 3秒后自动关闭弹窗
        setTimeout(closeModal, 3000);
    }

    updateMainTimeStatus() {
        this.updateCountryStatus();
        this.updateTimeStatus();
        this.updateTimezoneStatus();
    }

    updateCountryStatus() {
        const statusElement = document.getElementById('countryStatus');
        const iconElement = statusElement.querySelector('.status-icon');
        const textElement = statusElement.querySelector('.status-text');
        
        if (this.mainCountry) {
            // 已选择国家
            statusElement.className = 'status-item set';
            iconElement.innerHTML = '<i class="fas fa-check-circle"></i>';
            textElement.textContent = this.mainCountry;
        } else {
            // 未选择国家
            statusElement.className = 'status-item not-set';
            iconElement.innerHTML = '<i class="fas fa-clock"></i>';
            textElement.textContent = '未设置';
        }
    }

    updateTimeStatus() {
        const statusElement = document.getElementById('timeStatus');
        const iconElement = statusElement.querySelector('.status-icon');
        const textElement = statusElement.querySelector('.status-text');
        
        if (this.mainTimes.length > 0) {
            // 已设置时间
            statusElement.className = 'status-item set';
            iconElement.innerHTML = '<i class="fas fa-check-circle"></i>';
            textElement.textContent = '已设置';
        } else {
            // 未设置时间
            statusElement.className = 'status-item not-set';
            iconElement.innerHTML = '<i class="fas fa-clock"></i>';
            textElement.textContent = '未设置';
        }
    }

    async updateTimezoneStatus() {
        const statusElement = document.getElementById('timezoneStatus');
        const iconElement = statusElement.querySelector('.status-icon');
        const textElement = statusElement.querySelector('.status-text');
        
        if (this.mainCountry) {
            // 显示查询中状态
            statusElement.className = 'status-item not-set';
            iconElement.innerHTML = '<i class="fas fa-globe"></i>';
            textElement.textContent = '查询中...';
            
            try {
                // 查询主国家的实时时区信息
                const timezoneData = await this.getTimezoneDataWithRetry(countryTimezones[this.mainCountry].timezone);
                const utcOffset = this.formatUTCOffset(timezoneData.utc_offset_seconds, timezoneData.isFixedTimezone);
                
                // 更新为已查询状态
                statusElement.className = 'status-item set';
                iconElement.innerHTML = '<i class="fas fa-check-circle"></i>';
                textElement.textContent = utcOffset;
            } catch (error) {
                console.error('查询时区失败:', error);
                // 显示查询失败状态
                statusElement.className = 'status-item not-set';
                iconElement.innerHTML = '<i class="fas fa-times-circle"></i>';
                textElement.textContent = error.message || '查询失败';
            }
        } else {
            // 未选择国家
            statusElement.className = 'status-item not-set';
            iconElement.innerHTML = '<i class="fas fa-globe"></i>';
            textElement.textContent = '未查询';
        }
    }


    fillTimeInputs(times) {
        const timeInputs = document.querySelectorAll('.time-input');
        times.forEach((time, index) => {
            if (timeInputs[index]) {
                const [hours, minutes] = time.split(':');
                const hourInput = timeInputs[index].querySelector('.hour-input');
                const minuteInput = timeInputs[index].querySelector('.minute-input');
                
                if (hourInput && minuteInput) {
                    hourInput.value = hours;
                    minuteInput.value = minutes;
                }
            }
        });
        
        // 更新主时间数组
        this.mainTimes = times;
        this.updateTimeStatus();
    }

    showPresetSuccess(presetName) {
        // 移除现有的预设成功提示
        const existingSuccess = document.querySelector('.preset-success');
        if (existingSuccess) {
            existingSuccess.remove();
        }
        
        // 创建预设成功提示
        const successDiv = document.createElement('div');
        successDiv.className = 'preset-success';
        successDiv.innerHTML = `
            <span class="icon"><i class="fas fa-check-circle"></i></span>
            <span>已应用 ${presetName} 配置</span>
        `;
        
        // 将提示添加到预设按钮区域
        const presetArea = document.querySelector('.preset-buttons');
        presetArea.appendChild(successDiv);
        
        // 3秒后自动移除提示
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 3000);
    }

    // 显示刷新状态
    showRefreshStatus() {
        const results = document.getElementById('timeResults');
        const cards = results.querySelectorAll('.time-result-card');
        
        cards.forEach(card => {
            const timesContainer = card.querySelector('.multiple-times');
            if (timesContainer) {
                // 显示--:--状态
                const timeChips = timesContainer.querySelectorAll('.time-chip');
                timeChips.forEach(chip => {
                    chip.textContent = '--:--';
                    chip.classList.add('loading');
                });
            }
            
            const utcInfo = card.querySelector('.utc-info');
            if (utcInfo) {
                utcInfo.textContent = '查询中...';
            }
        });
    }

    // 刷新主时间
    async refreshMainTime() {
        const results = document.getElementById('timeResults');
        const mainCard = results.querySelector('.time-result-card');
        if (mainCard) {
            await this.updateMainTimezoneInfo(mainCard);
        }
    }

    // 刷新所有目标国家时间
    async refreshAllTargetTimes() {
        const refreshPromises = this.targetCountries.map(async (country) => {
            await this.refreshCountryTime(country);
        });
        
        await Promise.all(refreshPromises);
    }

    // 刷新所有时间
    async refreshAllTimes() {
        if (!this.mainCountry || !this.mainTimes.length || this.targetCountries.length === 0) {
            return;
        }

        const refreshBtn = document.getElementById('refreshAllBtn');
        if (refreshBtn) {
            refreshBtn.innerHTML = '⏳ 刷新中...';
            refreshBtn.disabled = true;
        }

        try {
            // 显示刷新状态
            this.showRefreshStatus();
            
            // 刷新主时间
            await this.refreshMainTime();
            
            // 刷新所有目标国家时间
            await this.refreshAllTargetTimes();
        } catch (error) {
            console.error('刷新失败:', error);
            this.showMessage('刷新失败，请重试', 'error');
        } finally {
            if (refreshBtn) {
                refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> 刷新所有时间';
                refreshBtn.disabled = false;
            }
        }
    }

    // 刷新单个国家的时间
    async refreshCountryTime(country) {
        if (!this.mainCountry || !this.mainTimes.length) {
            return;
        }

        // 找到对应的卡片
        const results = document.getElementById('timeResults');
        const cards = results.querySelectorAll('.time-result-card');
        let targetCard = null;

        for (const card of cards) {
            const title = card.querySelector('h3');
            if (title && title.textContent.includes(countryTimezones[country].displayName)) {
                targetCard = card;
                break;
            }
        }

        if (!targetCard) {
            return;
        }

        // 显示加载状态
        const refreshBtn = targetCard.querySelector('.refresh-btn');
        if (refreshBtn) {
            refreshBtn.innerHTML = '⏳';
            refreshBtn.disabled = true;
            refreshBtn.classList.add('loading');
        }

        try {
            if (country === this.mainCountry) {
                // 刷新主时间
                await this.updateMainTimezoneInfo(targetCard);
            } else {
                // 刷新目标国家时间
                const convertedTimes = [];
                for (const mainTime of this.mainTimes) {
                    const [hours, minutes] = mainTime.split(':').map(Number);
                    const today = new Date();
                    const mainDateTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);
                    const targetTime = await this.convertTime(mainDateTime, this.mainCountry, country);
                    convertedTimes.push(this.formatTimeSimple(targetTime));
                }

                // 获取目标时区的实时UTC偏移
                const targetTimezoneData = await this.getTimezoneDataWithRetry(countryTimezones[country].timezone);
                const utcOffset = this.formatUTCOffset(targetTimezoneData.utc_offset_seconds, targetTimezoneData.isFixedTimezone);
                
                // 获取时区状态标识
                const timezoneStatus = targetTimezoneData.isFixedTimezone ? '无夏令时' : '实时查询';

                // 先显示--:--状态
                const timesContainer = targetCard.querySelector('.multiple-times');
                if (timesContainer) {
                    const timeChips = timesContainer.querySelectorAll('.time-chip');
                    timeChips.forEach(chip => {
                        chip.textContent = '--:--';
                        chip.classList.add('loading');
                    });
                }

                // 短暂延迟后更新为实际数据
                setTimeout(() => {
                    // 更新显示结果
                    targetCard.innerHTML = `
                        <div class="time-result-card-header">
                            <h3>
                                ${countryTimezones[country].flag} ${countryTimezones[country].displayName}
                                <span class="utc-info">${utcOffset}</span>
                                <span class="timezone-status-header">${timezoneStatus}</span>
                            </h3>
                            <button class="btn-copy" onclick="timeConverter.copyTimeCard(this.closest('.time-result-card'))" title="复制">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                        <div class="multiple-times">
                            ${convertedTimes.map(time => `<span class="time-chip">${time}</span>`).join('')}
                        </div>
                    `;
                }, 500); // 500ms延迟，让用户看到--:--状态
                
                // 恢复刷新按钮状态
                const newRefreshBtn = targetCard.querySelector('.refresh-btn');
                if (newRefreshBtn) {
                    newRefreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i>';
                    newRefreshBtn.disabled = false;
                    newRefreshBtn.classList.remove('loading');
                }
            }
        } catch (error) {
            console.error('刷新失败:', error);
            // 恢复刷新按钮
            if (refreshBtn) {
                refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i>';
                refreshBtn.disabled = false;
                refreshBtn.classList.remove('loading');
            }
        }
    }

    // AG(欧洲)预设
    applyPresetAG() {
        // 设置主国家为中国（北京时间）
        this.selectedMainCountry = '中国';
        this.mainCountry = '中国';
        document.getElementById('mainCountrySearch').value = '中国';
        this.updateCountryStatus();
        this.updateTimezoneStatus();
        
        // 设置时间个数为5
        document.getElementById('timeCount').value = 5;
        this.generateTimeInputs();
        
        // 设置时间（北京时间）
        const times = ['18:00', '20:00', '23:00', '01:00', '02:00'];
        this.fillTimeInputs(times);
        
        // 自动设置主时间
        this.setMainTime();
        
        // 显示成功提示
        this.showPresetSuccess('AG(欧洲)');
    }


    // SW(欧洲)预设
    applyPresetSW() {
        // 设置主国家为中国（北京时间）
        this.selectedMainCountry = '中国';
        this.mainCountry = '中国';
        document.getElementById('mainCountrySearch').value = '中国';
        this.updateCountryStatus();
        this.updateTimezoneStatus();
        
        // 设置时间个数为4
        document.getElementById('timeCount').value = 4;
        this.generateTimeInputs();
        
        // 设置时间（北京时间）
        const times = ['20:00', '00:00', '02:00', '03:00'];
        this.fillTimeInputs(times);
        
        // 自动设置主时间
        this.setMainTime();
        
        // 显示成功提示
        this.showPresetSuccess('SW(欧洲)');
    }

    // 新时代(欧洲)预设
    applyPresetNewEra() {
        // 设置主国家为中国（北京时间）
        this.selectedMainCountry = '中国';
        this.mainCountry = '中国';
        document.getElementById('mainCountrySearch').value = '中国';
        this.updateCountryStatus();
        this.updateTimezoneStatus();
        
        // 设置时间个数为5
        document.getElementById('timeCount').value = 5;
        this.generateTimeInputs();
        
        // 设置时间（北京时间）
        const times = ['20:00', '22:00', '00:00', '01:00', '02:00'];
        this.fillTimeInputs(times);
        
        // 自动设置主时间
        this.setMainTime();
        
        // 显示成功提示
        this.showPresetSuccess('新时代(欧洲)');
    }

    // PICTET(欧洲)预设
    applyPresetPictetEurope() {
        // 设置主国家为中国（北京时间）
        this.selectedMainCountry = '中国';
        this.mainCountry = '中国';
        document.getElementById('mainCountrySearch').value = '中国';
        this.updateCountryStatus();
        this.updateTimezoneStatus();
        
        // 设置时间个数为5
        document.getElementById('timeCount').value = 5;
        this.generateTimeInputs();
        
        // 设置时间（北京时间）
        const times = ['17:30', '19:30', '22:30', '01:00', '02:00'];
        this.fillTimeInputs(times);
        
        // 自动设置主时间
        this.setMainTime();
        
        // 显示成功提示
        this.showPresetSuccess('PICTET(欧洲)');
    }

    // PICTET(南美洲)预设
    applyPresetPictetSouthAmerica() {
        // 设置主国家为中国（北京时间）
        this.selectedMainCountry = '中国';
        this.mainCountry = '中国';
        document.getElementById('mainCountrySearch').value = '中国';
        this.updateCountryStatus();
        this.updateTimezoneStatus();
        
        // 设置时间个数为5
        document.getElementById('timeCount').value = 5;
        this.generateTimeInputs();
        
        // 设置时间（北京时间）
        const times = ['00:30', '02:30', '05:30', '09:00', '10:00'];
        this.fillTimeInputs(times);
        
        // 自动设置主时间
        this.setMainTime();
        
        // 显示成功提示
        this.showPresetSuccess('PICTET(南美洲)');
    }

    // PICTET(大洋洲)预设
    applyPresetPictetOceania() {
        // 设置主国家为中国（北京时间）
        this.selectedMainCountry = '中国';
        this.mainCountry = '中国';
        document.getElementById('mainCountrySearch').value = '中国';
        this.updateCountryStatus();
        this.updateTimezoneStatus();
        
        // 设置时间个数为5
        document.getElementById('timeCount').value = 5;
        this.generateTimeInputs();
        
        // 设置时间（北京时间）
        const times = ['12:30', '13:30', '14:30', '17:00', '18:00'];
        this.fillTimeInputs(times);
        
        // 自动设置主时间
        this.setMainTime();
        
        // 显示成功提示
        this.showPresetSuccess('PICTET(大洋洲)');
    }

    // PICTET(亚洲)预设
    applyPresetPictetAsia() {
        // 设置主国家为中国（北京时间）
        this.selectedMainCountry = '中国';
        this.mainCountry = '中国';
        document.getElementById('mainCountrySearch').value = '中国';
        this.updateCountryStatus();
        this.updateTimezoneStatus();
        
        // 设置时间个数为5
        document.getElementById('timeCount').value = 5;
        this.generateTimeInputs();
        
        // 设置时间（北京时间）
        const times = ['17:30', '18:30', '19:30', '20:30', '22:00'];
        this.fillTimeInputs(times);
        
        // 自动设置主时间
        this.setMainTime();
        
        // 显示成功提示
        this.showPresetSuccess('PICTET(亚洲)');
    }

    // 初始化区域选择器
    initRegionSelector() {
        const regionSelector = document.getElementById('regionSelector');
        if (!regionSelector) return;

        let html = '';
        
        // 遍历所有大洲
        for (const [continent, subRegions] of Object.entries(countriesByRegion)) {
            html += `<div class="region-continent" data-continent="${continent}">
                <button class="btn btn-continent" data-continent="${continent}">
                    <i class="fas fa-chevron-right continent-icon"></i>
                    <span>${continent}</span>
                </button>
                <div class="region-continent-content" style="display: none;">`;
            
            // 遍历每个大洲下的子区域
            for (const [subRegion, countries] of Object.entries(subRegions)) {
                html += `<div class="region-subregion">
                    <h4 class="region-subregion-title">${subRegion}</h4>
                    <div class="region-buttons">`;
                
                // 为每个国家创建按钮
                countries.forEach(country => {
                    if (countryTimezones[country]) {
                        const countryData = countryTimezones[country];
                        html += `<button class="btn btn-region" data-country="${country}" title="${countryData.displayName}">
                            ${countryData.flag} ${country}
                        </button>`;
                    }
                });
                
                html += `</div></div>`;
            }
            
            html += `</div></div>`;
        }
        
        regionSelector.innerHTML = html;
        
        // 绑定大洲展开/收起事件
        regionSelector.querySelectorAll('.btn-continent').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const continent = btn.dataset.continent;
                const content = btn.closest('.region-continent').querySelector('.region-continent-content');
                const icon = btn.querySelector('.continent-icon');
                
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                    icon.classList.remove('fa-chevron-right');
                    icon.classList.add('fa-chevron-down');
                    btn.closest('.region-continent').classList.add('expanded');
                } else {
                    content.style.display = 'none';
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-right');
                    btn.closest('.region-continent').classList.remove('expanded');
                }
            });
        });
        
        // 绑定国家按钮点击事件
        regionSelector.querySelectorAll('.btn-region').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const country = btn.dataset.country;
                this.addCountryFromRegion(country);
            });
        });
    }

    // 从区域选择器添加国家
    async addCountryFromRegion(country) {
        if (!country || !countryTimezones[country]) {
            this.showError('无效的国家');
            return;
        }
        
        if (country === this.mainCountry) {
            this.showError('目标国家不能与主国家相同');
            return;
        }
        
        if (this.targetCountries.includes(country)) {
            this.showError('该国家已存在');
            return;
        }
        
        this.targetCountries.push(country);
        this.displayTargetList();
        await this.convertTimes();
        
        // 显示添加成功提示
        this.showAddSuccess(country);
        
        // 高亮按钮
        const btn = document.querySelector(`.btn-region[data-country="${country}"]`);
        if (btn) {
            btn.classList.add('added');
            setTimeout(() => {
                btn.classList.remove('added');
            }, 2000);
        }
    }
}

// 初始化应用
const timeConverter = new TimeZoneConverter();
