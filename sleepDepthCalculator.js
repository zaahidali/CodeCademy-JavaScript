const getSleepHours = day =>{
  if (day==='Monday')
  return 8;
  else if (day==='Tuesday')
  return 7;
  else if (day==='Wednesday')
  return 6;
  else if (day==='Thursday')
  return 7;
  else if (day==='Friday')
  return 5.6;
  else if (day==='Saturday')
  return 7;
  else if (day==='Sunday')
  return 8;
  else{
    return "Error"
  }
};

const getActualSleepHours = () =>{

return (getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') +getSleepHours('Sunday'));
};

const getIdealSleepHours = ()=>{
  let idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = ()=>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours ===idealSleepHours)
  {
    console.log('You got the perfect amount of sleep!');
  }
  else if(actualSleepHours >idealSleepHours)
  {
    console.log('You got the more sleep than you needed.');
  }
  else{
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }

};

calculateSleepDebt();
