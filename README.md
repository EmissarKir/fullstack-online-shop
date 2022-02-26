# My Paints  - fullstack-online-shop

 Проект интернет-магазина по продаже лакокрасочных материалов
 #### Демо http://79.143.31.93/
 ### В проекте реализовано:
 #### Возможности пользователя
 - регистрация/авторизация/обновление токена
 - подбор товара по категориям, фильтрация, сортировка и поиск
 - добавление товара в корзину и его удаление
 - фейковое оформление заказа и просмотр заказов в личном кабинете
 - редактирование данных клиента в личном кабинете
  #### Возможности администратора
  - редактирование товара
 ### Подробнее
 #### Клиентская часть:
 - сортировка по цене
 - динамическая фильтрация по применению
 - динамическая фильтрация по брендам
 - отображение выбранных фильтров
 - возможность удаления определенного фильтра и полная очистка фильтров
 - поиск товара по названию
 - регистрация/авторизация
 - breadcrumbs
 - пагинация
 - загрузка по категориям с сервера
 - добавление отзывов о товаре
 ##### корзина
 - добавление/удаление товара
 - корректировка количества товара
 - расчет стоимости доставки в зависимости от общей цены
 - отображение в навигационной панели общего количество выбранного товара
 - редирект на страницу товара
 - расчет суммы по выбранной позиции
 ##### страница товара
 - блокировка возможности выбора товара которого нет в наличии
 - предупреждение при выборе максимального количества доступного товара (tooltip)
 - просмотр тех спецификации на товар 
 ##### личный кабинет
 - редактирование данных
 - вывод списка покупок
### Серверная часть
данные для проекта взяты с прайс-листа интернет-магазина.
#### Предварительная подготовка
Исходные данные (Paints)
BECKERS INTERIO VAGGFARG 07 краска моющаяся для стен и потолков, матовая, база A (0,9л)  
BECKERS INTERIO VAGGFARG 07 краска моющаяся для стен и потолков, матовая, база A (2,7л)  
BECKERS INTERIO VAGGFARG 07 краска моющаяся для стен и потолков, матовая, база A (9л)  
BECKERS INTERIO VAGGFARG 07 краска моющаяся для стен и потолков, матовая, база C (0,9л)  
BECKERS INTERIO VAGGFARG 07 краска моющаяся для стен и потолков, матовая, база C (2,7л)  
BECKERS INTERIO VAGGFARG 07 краска моющаяся для стен и потолков, матовая, база C (9л)  
на основе данных выше создается шаблон товара BECKERS INTERIO VAGGFARG 07 краска моющаяся для стен и потолков (Templates), добавляются общие характеристики товара (цвет, место производства, применение и т.д.)  
**Paints** - изменяющиеся свойства product (sku, цена, количество)  
**Templates** - постоянные свойства product (производитель, применение)  
 Основная сущность проекта - **Products** - массив красок из которых строится приложение.  
 Создается путем _merge_ массива объектов **Paints** и массива объектов **Template**



