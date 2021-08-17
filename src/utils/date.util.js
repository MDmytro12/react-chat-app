export default function dateFilter(date = new Date() ){
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric',year: 'numeric', month: 'numeric', day: 'numeric' ,
    hour12: false }

    return new Intl.DateTimeFormat('en-US' , options).format(date)
}