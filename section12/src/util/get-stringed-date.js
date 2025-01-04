export const getStringedDate = (targetDate) =>
{
    // 년(yyyy)-월(mm)-일(dd)
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if (month < 10)
    {   month = `0${month}`;    }

    if (date < 10)
    {   date = `0${date}`;  }
    
    return `${year}-${month}-${date}`;
};