import { React, useState } from 'react';
import Container from '@mui/material/Container';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Title from '../Title/Title';
import { Button, ButtonGroup, Input, TextareaAutosize } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import { IMaskInput } from 'react-imask';

import styles from './CreateAdvert.module.css'

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SailingIcon from '@mui/icons-material/Sailing';
import BrandsList from '../IndexContent/Advert/AdvertSearch/BrandsList/BrandsList';

import Sedan from '../../images/Sedan.svg';
import Coupe from '../../images/Coupe.svg';

import { style } from '@mui/system';
import SearchFilter from '../Search/SearchMenu/SearchFilter/SearchFilter';

function CreateAdvert({ allMarks }) {

    const [advertValues, setAdvertValues] = useState({
        type_of_car: "",
        mark_of_car: "",
        car_model: "",
        year_of_issue: null,
        year_of_car_purchase: null,
        month_of_car_purchase: null,
        car_body_type: "",
        engine: "",
        drive_unit_display: "",
        transmission_display: "",
        modification: "",
        color: "",
        mileage: null,
        state_number: "",
        vin: "",
        registration_certificate: "",
        passport_of_car: "",
        description: "",
        owners_by_pts: null,
        city_of_rent: "",
        price: null,
        isOnGuarantee: false,
        isHaveEngineEquipment: false,
        isWasBuyOnlyForRent: false,
        isNotRegisteredInRussia: false,
        canShowOnly: false,
        isChatOnly: false,

    })

    const marksList = [
        { label: 'Honda' },
        { label: 'Infiniti' },
    ];

    // console.log(allMarks)

    function handleChange(e) {
        console.log(e.target.innerText)
        setAdvertValues(prev => ({ ...prev, [e.target.id]: e.target.value || e.target.innerText }))
    }

    function setColor(color) {
        setAdvertValues(prev => ({ ...prev, color: color }))
    }

    console.log(advertValues);

    return (
        <Container sx={{ padding: "35px 0" }}>
            <BreadCrumbs />
            <section>
                <div className={styles.filling}>
                    <Title title="Разместить объявление аренды"></Title>

                    <div className={styles['choose-transport']}>

                        <Button variant="contained"
                            startIcon={<DirectionsCarIcon size="large" />}
                        >Автомобиль</Button>

                        <Button variant="contained"
                            startIcon={<LocalShippingIcon />}
                        >Коммерческое авто</Button>

                        <Button variant="contained"
                            startIcon={<TwoWheelerIcon />}
                        >Мото</Button>

                        <Button variant="contained"
                            startIcon={<SailingIcon />}
                        >Водный транспорт</Button>
                    </div>

                    <div className={styles['enter-model']}>
                        <h3>Введите марку автомобиля</h3>
                        <div style={{ color: "#316BFE", fontSize: "16px" }}>Разместить через VIN</div>
                    </div>

                    <div className={styles['brand-search-input']}>
                        {/* <TextField sx={{
                            width: "100%", background: "#E8EDF5", borderRadius: "7px",
                            border: "none"
                        }} label="Марка" 
                        onChange={e => handleChange(e)}/> */}

                        <Autocomplete
                            onChange={e => handleChange(e)}
                            disablePortal
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                            id="combo-box-demo"
                            options={marksList}
                            sx={{ width: "50%", background: "#E8EDF5", border: "0" }}
                            renderInput={(params) => <TextField {...params} label="Марка автомобиля"
                            />}
                        />

                        {/* <input type="text" name="hello" onChange={e => handleChange(e)}/> */}

                    </div>

                    <div className={styles['brand-list']}>
                        <BrandsList />
                    </div>

                    <div className={styles['model-search-input']}>
                        <h3>Модель автомобиля</h3>

                        <TextField sx={{
                            width: "100%", background: "#E8EDF5", borderRadius: "7px",
                            border: "none"
                        }}
                            label="Марка"
                            onChange={e => handleChange(e)}
                            id="mark_of_car"
                        />
                    </div>

                    <div className={styles['year-of-manufacture']}>
                        <h3>Год выпуска</h3>


                        <Button variant="contained" id="year_of_issue" onClick={e => handleChange(e)}>
                            2010
                        </Button>

                        <Button variant="contained" id="year_of_issue" onClick={e => handleChange(e)}>
                            2009
                        </Button>

                        <Button variant="contained" id="year_of_issue" onClick={e => handleChange(e)}>
                            2008
                        </Button>

                        <Button variant="contained" id="year_of_issue" onClick={e => handleChange(e)}>
                            2007
                        </Button>

                        <Button variant="contained" id="year_of_issue" onClick={e => handleChange(e)}>
                            2006
                        </Button>
                    </div>

                    <div className={styles['car-body-type']}>
                        <h3>Тип кузова</h3>

                        <Button variant="contained" id="car_body_type" onClick={e => handleChange(e)}
                        >Седан</Button>

                        <Button variant="contained" id="car_body_type" onClick={e => handleChange(e)}
                        >Купе</Button>
                    </div>

                    <div className={styles.engine}>
                        <h3>Двигатель</h3>

                        <div className={styles['type-of-engine']}>
                            <Button variant="contained" id="engine" onClick={e => handleChange(e)}
                            >Бензин</Button>

                            <Button variant="contained" id="engine" onClick={e => handleChange(e)}
                            >Дизель</Button>

                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={(e) => console.log(e.target.checked)} />} label="Газобаллоное оборудование" />
                            </FormGroup>
                        </div>
                    </div>

                    <div className={styles['wheel-drive']}>
                        <h3>Привод</h3>

                        <Button variant="contained" id="drive_unit_display" onClick={e => handleChange(e)}
                        >Задний</Button>

                        <Button variant="contained" id="drive_unit_display" onClick={e => handleChange(e)}
                        >Полный</Button>
                    </div>

                    <div className={styles.transmission}>
                        <h3>Коробка передач</h3>

                        <Button variant="contained" id="transmission_display" onClick={e => handleChange(e)}
                        >Механическая</Button>

                        <Button variant="contained" id="transmission_display" onClick={e => handleChange(e)}
                        >Автоматическая</Button>
                    </div>

                    <div className={styles.modification}>
                        <h3>Модификация</h3>

                        <Button variant="contained"
                            style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}
                            id="modification" onClick={e => handleChange(e)}
                        >
                            105 л.с
                            2.0 АТ
                            2008-2010
                        </Button>
                        <Button variant="contained"
                            style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}
                            id="modification" onClick={e => handleChange(e)}
                        >
                            105 л.с
                            2.0 АТ
                            2008-2010
                        </Button>
                        <Button variant="contained"
                            style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}
                            id="modification" onClick={e => handleChange(e)}
                        >
                            105 л.с
                            2.0 АТ
                            2008-2010
                        </Button>
                        <Button variant="contained"
                            style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}
                            id="modification" onClick={e => handleChange(e)}
                        >
                            105 л.с
                            2.0 АТ
                            2008-2010
                        </Button>

                    </div>

                    <div className={styles['pick-color']}>

                        <h3>Цвет</h3>

                        <button id="Белый" onClick={() => setColor('Белый')}><div style={{ background: "#ffffff", border: "1px solid black" }}></div></button>
                        <button id="Ярко-серый" onClick={() => setColor('серый')}><div style={{ background: "#C1C1C1" }}></div></button>
                        <button id="Бежевый" onClick={() => setColor('Бежевый')}><div style={{ background: "#FFEFD5" }}></div></button>
                        <button id="Жёлтый" onClick={() => setColor('Жёлтый')}><div style={{ background: "#FDE910" }}></div></button>
                        <button id="Оранжевый" onClick={() => setColor('Оранжевый')}><div style={{ background: "#FABE00" }}></div></button>
                        <button id="Персиковый" onClick={() => setColor('Персиковый')}><div style={{ background: "#FF9966" }}></div></button>
                        <button id="Розовый" onClick={() => setColor('Розовый')}><div style={{ background: "#FFC0CB" }}></div></button>
                        <button id="Красный" onClick={() => setColor('Красный')}><div style={{ background: "#FF2600" }}></div></button>
                        <button id="Бардовый" onClick={() => setColor('Бардовый')}><div style={{ background: "#CC1D33" }}></div></button>
                        <button id="Коричневый" onClick={() => setColor('Коричневый')}><div style={{ background: "#926547" }}></div></button>
                        <button id="Голубой" onClick={() => setColor('Голубой')}><div style={{ background: "#0088FF" }}></div></button>
                        <button id="Синий" onClick={() => setColor('Синий')}><div style={{ background: "#0433FF" }}></div></button>
                        <button id="Фиолетовый" onClick={() => setColor('Фиолетовый')}><div style={{ background: "#9966CC" }}></div></button>
                        <button id="Серый" onClick={() => setColor('Серый')}><div style={{ background: "#9C9999" }}></div></button>
                        <button id="Чёрный" onClick={() => setColor('Чёрный')}><div style={{ background: "#000000" }}></div></button>
                    </div>

                    <div className={styles.mileage}>

                        <h3>Пробег</h3>

                        <TextField label="КМ" sx={{
                            width: "50%", background: "#E8EDF5", borderRadius: "7px",
                            border: "none"
                        }}
                            id="mileage" onChange={e => handleChange(e)}
                            type="number"
                        ></TextField>

                    </div>

                    <div className={styles['goverment-numbers']}>
                        <h3>Госномер и VIN</h3>

                        <p style={{ color: "#78839E" }}>Мы размещаем только проверенные автомобили</p>

                        <div className={styles.number}>
                            <IMaskInput
                                mask="$ ### $$"
                                definitions={{
                                    '#': /[0-9]/,
                                    '$': /[ЁёА-я]/
                                }}
                                placeholder="А 000 АА"
                                style={{ textTransform: "uppercase", color: "#78839E", padding: "12px 24px", fontSize: "26px", width: "200px" }}
                                id="state_number"
                                onChange={e => handleChange(e)}
                            />
                            <IMaskInput
                                mask="###"
                                definitions={{
                                    '#': /[0-9]/
                                }}
                                placeholder="000"
                                style={{ textTransform: "uppercase", color: "#78839E", padding: "12px 24px", fontSize: "26px", width: "100px" }}
                            />

                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked onClick={(e) => console.log(e.target.checked)} />} label="Автомобиль не на учёте в РФ" />
                            </FormGroup>
                        </div>

                        <div className={styles['goverment-input']}>
                            <TextField label="VIN или Номер кузова" sx={{
                                width: "50%", background: "#E8EDF5", borderRadius: "7px",
                                border: "none"
                            }}
                                type="number"
                                id="vin"
                                onChange={e => handleChange(e)}
                            />
                        </div>

                        <div className={styles['goverment-input']}>
                            <TextField label="Свидетельство о регистрации (СТС)" sx={{
                                width: "50%", background: "#E8EDF5", borderRadius: "7px",
                                border: "none"
                            }}
                                type="number"
                                id="registration_certificate"
                                onChange={e => handleChange(e)}
                            />
                        </div>
                    </div>

                    <div className={styles['transport-passport']}>

                        <h3>Паспорт транспортного средства</h3>

                        <Button variant="contained" id="passport_of_car" onClick={e => handleChange(e)}
                        >Оригинал</Button>

                        <Button variant="contained" id="passport_of_car" onClick={e => handleChange(e)}
                        >Дубликат</Button>
                    </div>

                    <div className={styles['trasnport-search']}>
                        <TextField label="Владельцев по ПТС" sx={{
                            width: "50%", background: "#E8EDF5", borderRadius: "7px",
                            border: "none"
                        }}
                            type="number"
                            id="owners_by_pts"
                            onChange={e => handleChange(e)}
                        />
                    </div>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked onClick={(e) => console.log(e.target.checked)} />} label="Автомобиль приобретён для аренды" />
                    </FormGroup>

                    <div className={styles['date-of-purchase']}>

                        <h3>Дата покупки авто</h3>

                        <div className={styles['choosing-date']}>
                            <TextField label="Год" sx={{
                                width: "100%", background: "#E8EDF5", borderRadius: "7px",
                                border: "none"
                            }}
                                type="number"
                                id="year_of_car_purchase"
                                onChange={e => handleChange(e)}
                            />

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={marksList}
                                sx={{ background: "#E8EDF5", border: "0" }}
                                renderInput={(params) => <TextField {...params} label='Месяц' />}
                            />
                        </div>

                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="На гарантии" />
                        </FormGroup>

                    </div>

                    <div className={styles['upload-photo']}>
                        <h3>Фотографии</h3>

                        <p style={{ color: "#78839E", width: "500px" }}>На фотографиях не должно быть контактов, надписей, людей,
                            водяных знаков и любых посторонних предметов.</p>
                    </div>

                    <div className={styles.description}>
                        <h3>Описание</h3>

                        <p>Не указывайте в этом поле электронную почту, номер телефона, цену, адрес места
                            осмотра и не предлайгайте какие-либо услуги - такое объявление не пройдет модерацию.</p>

                        {/* <TextField placeholder="Честно опишите достоинства и недостатки своего автомобиля."
                        sx={{ background: "#E8EDF5", borderRadius: "7px", minHeight: "165px", width: "843px"}}>

                        </TextField> */}
                        <TextareaAutosize style={{ background: "#E8EDF5", borderRadius: "7px", minHeight: "165px", minWidth: "843px", maxWidth: "843px", border: "none", outline: "none", padding: "15px 20px", fontSize: "16px", color: "#595b61" }}
                            id="description" onChange={e => handleChange(e)}
                        />
                    </div>

                    <div className={styles.contacts}>

                        <h3>Контакты</h3>

                        <h4>Город продажи</h4>


                        <div className={styles['contact-form']}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={marksList}
                                sx={{ background: "#E8EDF5", border: "0", width: "50%" }}
                                renderInput={(params) => <TextField {...params} label='Город' />}
                            />

                            <div className={styles['contact-description']}>
                                Изменить город после размещения будет нельзя
                            </div>
                        </div>



                        <div className={styles['contact-form']}>
                            <TextField label="Место осмотра" sx={{
                                width: "50%", background: "#E8EDF5", borderRadius: "7px",
                                border: "none"
                            }}></TextField>

                            <div className={styles['contact-description']} style={{ color: "#316BFE", fontSize: "16px", fontWeight: "500" }}>
                                Уточнить расположение на карте
                            </div>
                        </div>

                        <h4>Номер телефона</h4>

                        <div className={styles['contact-form']}>
                            <TextField label="+79002001111" sx={{
                                width: "50%", background: "#E8EDF5", borderRadius: "7px",
                                border: "none"
                            }}></TextField>

                            <div className={styles['contact-description']} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "250px" }}>
                                <p>С</p>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={marksList}
                                    sx={{ background: "#E8EDF5", border: "0" }}
                                    renderInput={(params) => <TextField {...params} label='9:00' />}
                                />
                                <p>До</p>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={marksList}
                                    sx={{ background: "#E8EDF5", border: "0" }}
                                    renderInput={(params) => <TextField {...params} label='9:00' />}
                                />
                            </div>
                        </div>

                        <div className={styles['checkbox-form']}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Готов показать онлайн" />
                                <p>Выберите, если готовы показать автомобиль покупателю по видеосвязи.</p>
                            </FormGroup>

                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Общение только в чате" />
                                <p>Если вам неудобно принимать звонки покупателей, вы можете перевести всё общение в чат.
                                    Включите эту опцию, и на странице объявления не будет вашего телефона.</p>
                            </FormGroup>
                        </div>

                    </div>

                    <div className={styles.price}>
                        <h3>Цена</h3>

                        <TextField label="Введите цену в рублях." sx={{
                            width: "50%", background: "#E8EDF5", borderRadius: "7px",
                            border: "none"
                        }}
                        type="number"
                        id="price"
                        onChange={e => handleChange(e)}
                        />
                    </div>

                    <Button variant="contained" sx={{
                        // color: '#fff',
                        // background: '#316BFE',
                        // borderRadius: "7px",
                        width: "100%",
                        margin: "2.5em 0",
                        // padding: "13px 0"
                    }}>Разместить объявление</Button>

                </div>


                {/* <div className={styles['filling-stroke']}>

                </div> */}
            </section>

        </Container>
    )
}

export default CreateAdvert;