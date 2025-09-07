document.getElementById('scheduleForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // отправляем форму
  
  const formData = new FormData(e.target); // получаем данные из формы
  const scheduleData = {
    employeeIds: formData.get('employeeIds').split(',').map(id => id.trim()),
    startDate: formData.get('startDate'),
    endDate: formData.get('endDate')
  };

  try {
    console.log('Sending:', scheduleData);
    
    const response = await fetch('http://localhost:3000/api/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scheduleData)
    }); // для отправки в пустой массив на сервер

    console.log('Response status:', response.status);
    
    // проверка ответа
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
    
    document.getElementById('resultData').textContent = "✅ Запрос успешно отправлен!";
    document.getElementById('result').style.display = 'block'; // для того что было видно отправку запроса
    
  } catch (error) {
    console.error('Full error:', error);
    alert('Ошибка при создании расписания: ' + error.message);
  }
});