Требования:

При загрузке страницы должен происходить запрос на получение данных
Данные должны отображаться в стилизованном блоке на странице
Пока данных нет, то блок отображаться не должен
Также на странице должна быть кнопка ‘GET MORE INFO’, при нажатии на которую также должен происходить запрос данных
При получении данных после клика на кнопку они должны появиться на экране под предыдущими данными в том же блоке 
Когда размер блока с данными заходит за предел 700px блок расширяться в высоту не должен, а должен появиться скролл внутри блока с данными
На странице должна быть вторая кнопка “DELETE ALL DATA”, которая будет удалять все полученные данные (при отсутствии фактов в блоке, кнопка должна исчезать)
Задача*:

Создайте компонент индикатора загрузки, который будет появляться в процессе получения данных и исчезать, когда данные получены (Spinner или др). Его необходимо использовать в компоненте Lesson 10
P.S. Индикатором загрузки не должен быть текст
const getDogPhoto = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const result = await response.json()
      console.log(response)

      if (!response.ok) {
        throw Object.assign(new Error('API error'), { error: result })
      } else {
        setDogImageUrl(result.message)
      }

    } catch (error) {
      console.log('Error')
    }
  }