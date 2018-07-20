export default class DateConverter {

    constructor(date) {
    	this.date = date; 
    	this.dateConverted;   	
    	this._init(this.date);
    }

	_init(date) {
		const [day, month, year] = date.split("-");
		this.dateConverted = new Date(year, month - 1, day);

		return this.dateConverted;
	}

	getDayName() {
		return this.dateConverted.toLocaleDateString('en-GB', { weekday: 'long' }); 
	}

	getMonthName() {
		return this.dateConverted.toLocaleDateString('en-GB', { month: 'long' }); 
	}	

	getOrdinalDayNumber() {
		const dayNumber = this.dateConverted.getDate();

		if(dayNumber > 3 && dayNumber < 21) {
			return `${dayNumber}th`;		
		}

		switch (dayNumber % 10) {
			case 1:  return `${dayNumber}st`;
			case 2:  return `${dayNumber}nd`;
			case 3:  return `${dayNumber}rd`;

			default: return `${dayNumber}th`;
		}
	}
}