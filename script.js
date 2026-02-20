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


    showCountryDropdown(searchTerm, dropdown, type) {
        if (!searchTerm.trim()) {
            dropdown.classList.remove('show');
            return;
        }

        const filteredCountries = Object.keys(countryTimezones).filter(country => 
            country.toLowerCase().includes(searchTerm.toLowerCase()) ||
            countryTimezones[country].displayName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        dropdown.innerHTML = '';
        
        if (filteredCountries.length === 0) {
            dropdown.innerHTML = '<div class="dropdown-item">未找到匹配的国家</div>';
        } else {
            filteredCountries.forEach(country => {
                const item = document.createElement('div');
                item.className = 'dropdown-item';
                item.innerHTML = `
                    <span class="country-flag">${countryTimezones[country].flag}</span>
                    <span class="country-name">${country}</span>
                    <span class="timezone-info">${countryTimezones[country].displayName}</span>
                `;
                
                item.addEventListener('click', () => {
                    if (type === 'main') {
                        this.selectMainCountry(country);
                        dropdown.classList.remove('show');
                    } else {
                        this.selectTargetCountry(country);
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
            
            // 计算时区差异（秒）
            const timezoneDifference = targetTimeData.utc_offset_seconds - sourceTimeData.utc_offset_seconds;
            
            // 应用时区差异
            const targetTime = new Date(sourceTime.getTime() + (timezoneDifference * 1000));
            
            console.log(`转换 ${sourceCountry} -> ${targetCountry}:`, {
                sourceOffset: sourceTimeData.utc_offset_seconds,
                targetOffset: targetTimeData.utc_offset_seconds,
                difference: timezoneDifference,
                sourceTime: sourceTime.toISOString(),
                targetTime: targetTime.toISOString()
            });
            
            return targetTime;
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
            'America/Mexico_City', 'America/Cancun', 'America/Tijuana',
            
            // 欧洲（有夏令时）
            'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Rome', 'Europe/Madrid',
            'Europe/Amsterdam', 'Europe/Brussels', 'Europe/Vienna', 'Europe/Prague',
            'Europe/Warsaw', 'Europe/Stockholm', 'Europe/Copenhagen', 'Europe/Oslo',
            'Europe/Helsinki', 'Europe/Athens', 'Europe/Lisbon', 'Europe/Dublin',
            'Europe/Budapest', 'Europe/Bucharest', 'Europe/Sofia', 'Europe/Zagreb',
            'Europe/Belgrade', 'Europe/Kiev', 'Europe/Riga', 'Europe/Tallinn',
            'Europe/Vilnius', 'Europe/Luxembourg', 'Europe/Monaco', 'Europe/Andorra',
            'Europe/San_Marino', 'Europe/Vatican', 'Europe/Malta',
            
            // 大洋洲（有夏令时）
            'Australia/Sydney', 'Australia/Melbourne', 'Australia/Brisbane', 'Australia/Adelaide',
            'Australia/Perth', 'Australia/Darwin', 'Australia/Hobart', 'Pacific/Auckland',
            
            // 南美（部分有夏令时）
            'America/Santiago', 'America/Sao_Paulo', 'America/Montevideo',
            
            // 其他
            'Asia/Jerusalem', 'Asia/Beirut', 'Asia/Damascus', 'Asia/Nicosia',
            'Atlantic/Azores', 'Atlantic/Canary', 'Atlantic/Madeira'
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
            // API 1: WorldTimeAPI (主要)
            async () => {
                const response = await fetchWithTimeout(`https://worldtimeapi.org/api/timezone/${timezone}`, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                const offset = data.utc_offset;
                const isNegative = offset.startsWith('-');
                const cleanOffset = offset.replace(/[+-]/, '');
                const [hours, minutes] = cleanOffset.split(':').map(Number);
                return (isNegative ? -1 : 1) * (hours * 3600 + minutes * 60);
            },
            // API 2: TimeAPI.io (备用1)
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
            // API 3: 使用另一个WorldTimeAPI镜像（备用2）
            async () => {
                // 再次尝试WorldTimeAPI（可能是网络临时问题）
                const response = await fetchWithTimeout(`https://worldtimeapi.org/api/timezone/${timezone}`, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                const offset = data.utc_offset;
                const isNegative = offset.startsWith('-');
                const cleanOffset = offset.replace(/[+-]/, '');
                const [hours, minutes] = cleanOffset.split(':').map(Number);
                return (isNegative ? -1 : 1) * (hours * 3600 + minutes * 60);
            }
        ];
        
        // 尝试所有API源
        let lastError = null;
        for (let i = 0; i < apiSources.length; i++) {
            try {
                const utc_offset_seconds = await apiSources[i]();
                
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
        const hours = Math.floor(Math.abs(offsetSeconds) / 3600);
        const minutes = Math.floor((Math.abs(offsetSeconds) % 3600) / 60);
        const sign = offsetSeconds >= 0 ? '+' : '-';
        
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
