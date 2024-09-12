const calAge = (birthYear) => {
    diffMillisecond = (new Date('2020-12-31') - new Date(`${birthYear}-01-01`))
    convertToDay = diffMillisecond / (1000 * 60 * 60 * 24)
    console.log(convertToDay + ' days');
}