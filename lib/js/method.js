// 日期格式化
function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}
// 处理百分比
function getPercent(num, total) {
    /// <summary>
    /// 求百分比
    /// </summary>
    /// <param name="num">当前数</param>
    /// <param name="total">总数</param>
    num = parseFloat(num);
    total = parseFloat(total);
    if (isNaN(num) || isNaN(total)) {
        return '-';
    }
    return total <= 0 ? '0%' : (Math.round(num / total * 10000) / 100.00) + "%";
}
// 根据出生日期，获取年龄
function getAge(strAge) {
    var birArr = strAge.split("-");
    var birYear = birArr[0];
    var birMonth = birArr[1];
    var birDay = birArr[2];

    d = new Date();
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1; //记得加1
    var nowDay = d.getDate();
    var returnAge;

    if (birArr == null) {
        return false
    }
    ;
    var d = new Date(birYear, birMonth - 1, birDay);
    if (d.getFullYear() == birYear && (d.getMonth() + 1) == birMonth && d.getDate() == birDay) {
        if (nowYear == birYear) {
            returnAge = 0; //
        } else {
            var ageDiff = nowYear - birYear; //
            if (ageDiff > 0) {
                if (nowMonth == birMonth) {
                    var dayDiff = nowDay - birDay; //
                    if (dayDiff < 0) {
                        returnAge = ageDiff - 1;
                    } else {
                        returnAge = ageDiff;
                    }
                } else {
                    var monthDiff = nowMonth - birMonth; //
                    if (monthDiff < 0) {
                        returnAge = ageDiff - 1;
                    } else {
                        returnAge = ageDiff;
                    }
                }
            } else {
                return 0; //返回-1 表示出生日期输入错误 晚于今天
            }
        }
        return returnAge;
    } else {
        return 0;
    }
}