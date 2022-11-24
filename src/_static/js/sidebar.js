function fillSidebar(building) {
    const area = document.querySelector('#area')
    const emission = document.querySelector('#emission')
    const savingDaily = document.querySelector('#savings-daily')
    const savingMonthly = document.querySelector('#savings-monthly')
    const savingYearly = document.querySelector('#savings-yearly')

    area.innerHTML = building.area;
}
  