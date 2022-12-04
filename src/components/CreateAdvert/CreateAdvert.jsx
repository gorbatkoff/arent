import { React, useState } from 'react';
import Container from '@mui/material/Container';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Title from '../Title/Title';
import { Button, ButtonGroup, Input, Select, MenuItem, InputLabel, TextareaAutosize, Box } from '@mui/material';
import InputMask from "react-input-mask";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import { IMaskInput } from 'react-imask';
import FormControl from '@mui/material/FormControl';

import styles from './CreateAdvert.module.css'

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SailingIcon from '@mui/icons-material/Sailing';
import BrandsList from '../IndexContent/Advert/AdvertSearch/BrandsList/BrandsList';


import { useForm, Controller } from "react-hook-form";

const marksList = [
    { label: 'Honda' },
    { label: 'Infiniti' },
];
const colors = [
    { label: 'Белый' },
    { label: 'Ярко-серый' },
    { label: 'Бежевый' },
    { label: 'Жёлтый' },
    { label: 'Оранжевый' },
    { label: 'Персиковый' },
    { label: 'Розовый' },
    { label: 'Красный' },
    { label: 'Бардовый' },
    { label: 'Коричневый' },
    { label: 'Голубой' },
    { label: 'Синий' },
    { label: 'Фиолетовый' },
    { label: 'Серый' },
    { label: 'Чёрный' },
];
const months = [
    { label: 'Январь' },
    { label: 'Февраль' },
    { label: 'Март' },
    { label: 'Апрель' },
    { label: 'Апрель' },
    { label: 'Май' },
    { label: 'Июнь' },
    { label: 'Июль' },
    { label: 'Август' },
    { label: 'Сентябрь' },
    { label: 'Октябрь' },
    { label: 'Ноябрь' },
    { label: 'Декабрь' },
]
const cities = [
    { label: 'Москва' },
    { label: 'Санкт-Петербург' },
    { label: 'Ростов На Дону' },
    { label: 'Краснодар' },
    { label: 'Екатеринбург' },
    { label: 'Белгород' },
    { label: 'Тверь' },
    { label: 'Новосибирск' },
    { label: 'Нижний Новгород' },
    { label: 'Челябинск' },
    { label: 'Самара' },
    { label: 'Новороссийск' },
    { label: 'Казань' },
]




function CreateAdvert({ allMarks }) {

    const { register, handleSubmit, control } = useForm();
    const [data, setData] = useState("");

    // List of states

    const [adCategoryValue, setAdCategoryValue] = useState();
    const [carBodyTypeValue, setCarBodyTypeValue] = useState();
    const [typeOfEngineValue, setTypeOfEngineValue] = useState();
    const [driveUnitValue, setDriveUnitValue] = useState();
    const [transmissionDisplayValue, setTransmissionDisplayValue] = useState();
    const [modificationValue, setModificationValue] = useState();
    const [transmissionValue, setTransmissionValue] = useState();

    function handleChange(event) {
        setAdCategoryValue(event.target.value);
    }

    function createAdvert(data){
        const obj = {
            "owner": 0,
            "ad_type": 1,
            "brand": -2147483648,
            "car_model": -2147483648,
            "year_of_issue": -2147483648,
            "engine": -2147483648,
            "has_gas_equipment": true,
            "drive_unit": 1,
            "transmission": 1,
            "color": 1,
            "mileage": -2147483648,
            "state_number": "string",
            "vin": "string",
            "body_number": "string",
            "registration_certificate": "string",
            "owners_by_pts": -2147483648,
            "car_purchased_for_rent": true,
            "year_of_car_purchase": -2147483648,
            "month_of_car_purchase": -2147483648,
            "on_guarantee": true,
            "description": "string",
            "sale_city": "string",
            "price": 0,
            "steering_wheel": 1,
            "customs": 1,
            "pts": "string",
            "insurance": 1,
            "generation": -2147483648
        }
    }


    return (
        <Container sx={{ padding: "35px 0" }}>
            <BreadCrumbs />
            <form className={styles.form} onSubmit={handleSubmit((data) => createAdvert(data))}>
                <div className={styles.filling}>
                    <Title title="Разместить объявление аренды"></Title>

                    <div className={styles['choose-transport']}>

                        <Box sx={{ minWidth: "100%" }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Выберите тип машины</InputLabel>
                                <Select
                                    {...register("category")}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={adCategoryValue}
                                    label="Age"
                                    onChange={(event) => setAdCategoryValue(event.target.value)}
                                >
                                    <MenuItem value={1}>Автомобиль</MenuItem>
                                    <MenuItem value={2}>Коммерческое авто</MenuItem>
                                    <MenuItem value={3}>Мото</MenuItem>
                                    <MenuItem value={4}>Водный транспорт</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        
                    </div>



                    <div className={styles['enter-model']}>
                        <h3>Введите марку автомобиля</h3>
                        <div style={{ color: "#316BFE", fontSize: "16px" }}>Разместить через VIN</div>
                    </div>

                    <div className={styles['brand-search-input']}>
                        <Autocomplete
                            
                            disablePortal
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                            id="combo-box-demo"
                            options={marksList}
                            sx={{ width: "50%", background: "#E8EDF5", border: "0" }}
                            renderInput={(params) => <TextField {...register("mark_of_auto")} {...params} label="Марка автомобиля"
                            />}
                        />

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
                            label="Модель"
                            id="mark_of_car"
                            {...register("model_of_auto")}
                        />
                    </div>

                    <div className={styles['year-of-manufacture']}>
                        <h3>Год выпуска</h3>


                        <TextField sx={{
                            width: "100%", background: "#E8EDF5", borderRadius: "7px",
                            border: "none"
                        }}
                            label="Модель"
                            id="mark_of_car"
                            {...register("year_of_car_purchase")}
                        />
                    </div>

                    <div className={styles['car-body-type']}>
                        <h3>Тип кузова</h3>

                        <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Тип кузова</InputLabel>
                                <Select
                                    {...register("car_body_type")}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={carBodyTypeValue}
                                    label="Тип кузова"
                                    onChange={(event) => setCarBodyTypeValue(event.target.value)}
                                >
                                    <MenuItem value={1}>Седан</MenuItem>
                                    <MenuItem value={2}>Купе</MenuItem>
                                </Select>
                            </FormControl>
                    </div>

                    <div className={styles.engine}>
                        <h3>Двигатель</h3>

                        <div className={styles['type-of-engine']}>
                        <FormControl fullWidth sx={{marginRight: "30px"}}>
                                <InputLabel id="demo-simple-select-label">Тип кузова</InputLabel>
                                <Select
                                    {...register("type-of-engine")}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={typeOfEngineValue}
                                    label="Тип кузова"
                                    onChange={(event) => setTypeOfEngineValue(event.target.value)}
                                >
                                    <MenuItem value={1}>Бензин</MenuItem>
                                    <MenuItem value={2}>Дизель</MenuItem>
                                </Select>
                            </FormControl>

                            <FormGroup >
                                <FormControlLabel control={<Checkbox {...register("has_gas_equipment")}/>} label="Газобаллоное оборудование" />
                            </FormGroup>
                        </div>
                    </div>

                    <div className={styles['wheel-drive']}>
                        <h3>Привод</h3>

                        <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Тип кузова</InputLabel>
                                <Select
                                    {...register("wheel_drive")}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={driveUnitValue}
                                    label="Тип кузова"
                                    onChange={(event) => setDriveUnitValue(event.target.value)}
                                >
                                    <MenuItem value={1}>Передний</MenuItem>
                                    <MenuItem value={2}>Задний</MenuItem>
                                    <MenuItem value={3}>Полный</MenuItem>
                                </Select>
                            </FormControl>
                    </div>

                    <div className={styles.transmission}>
                        <h3>Коробка передач</h3>

                        <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Тип кузова</InputLabel>
                                <Select
                                    {...register("transmission")}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={transmissionDisplayValue}
                                    label="Тип кузова"
                                    onChange={(event) => setTransmissionDisplayValue(event.target.value)}
                                >
                                    <MenuItem value={1}>Механическая</MenuItem>
                                    <MenuItem value={2}>Автоматическая</MenuItem>
                                </Select>
                            </FormControl>
                    </div>

                    <div className={styles.modification}>
                        <h3>Модификация</h3>

                        <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Тип кузова</InputLabel>
                                <Select
                                    {...register("transmission")}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={modificationValue}
                                    label="Тип кузова"
                                    onChange={(event) => setModificationValue(event.target.value)}
                                >
                                    <MenuItem value={1}>105 л.с
                            2.0 АТ
                            2008-2010</MenuItem>
                                    <MenuItem value={2}>105 л.с
                            2.0 АТ
                            2008-2010</MenuItem>
                                </Select>
                            </FormControl>


                    </div>

                    <div className={styles['pick-color']}>

                        <h3>Цвет</h3>

                        <button className={styles['color-button']}><div style={{ background: "#ffffff", border: "1px solid black" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#C1C1C1" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#FFEFD5" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#FDE910" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#FABE00" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#FF9966" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#FFC0CB" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#FF2600" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#CC1D33" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#926547" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#0088FF" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#0433FF" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#9966CC" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#9C9999" }}></div></button>
                        <button className={styles['color-button']}><div style={{ background: "#000000" }}></div></button>
                    </div>
                    <Autocomplete
                            disablePortal
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                            id="combo-box-demo"
                            options={colors}
                            sx={{ width: "50%", background: "#E8EDF5", border: "0", marginTop: "2em"}}
                            renderInput={(params) => <TextField {...register("color")} {...params} label="Цвет автомобиля"
                            />}
                        />

                    <div className={styles.mileage}>

                        <h3>Пробег</h3>

                        <TextField sx={{
                            width: "50%", background: "#E8EDF5", borderRadius: "7px",
                            border: "none"
                        }}  
                        type="number"
                            label="КМ"
                            {...register("mileage")}
                        />

                    </div>

                    <div className={styles['goverment-numbers']}>
                        <h3>Госномер и VIN</h3>

                        <p style={{ color: "#78839E" }}>Мы размещаем только проверенные автомобили</p>

                        <div className={styles.number}>

                            <Controller
                                name="state_number"
                                placeholder="А001АА"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <InputMask
                                        {...field}
                                        formatChars={{
                                            '9': '[0-9]',
                                            'a': '[АВЕКМНОРСТУХ-авекмнорстух]',
                                            '*': '/[А-Яа-яЁё]/'
                                        }}
                                        mask="a 999 aa"
                                        maskChar='_'
                                        alwaysShowMask="false"
                                        style={{ textTransform: "uppercase", color: "#78839E", padding: "12px 24px", fontSize: "26px", width: "200px" }}
                                        type="text"
                                        id="placeholder_test"
                                        placeholder="А001АА"
                                    />
                                )}
                            />

                            <Controller
                                name="region_number"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <InputMask
                                        {...field}
                                        mask='999'
                                        maskChar='_'
                                        alwaysShowMask="false"
                                        style={{ textTransform: "uppercase", color: "#78839E", padding: "12px 24px", fontSize: "26px", width: "100px" }}
                                    />
                                )}
                            />

                            <FormGroup>
                                <FormControlLabel control={<Checkbox {...register("has_gas_equipment")} />} label="Автомобиль не на учёте в РФ" />
                            </FormGroup>
                        </div>

                        <div className={styles['goverment-input']}>

                            <TextField label="VIN или Номер кузова" sx={{
                                width: "50%", background: "#E8EDF5", borderRadius: "7px",
                                border: "none"
                            }}
                                type="number"
                                {...register("vin")}
                            />
                        </div>

                        <div className={styles['goverment-input']}>
                            <TextField label="Свидететельство о регистрации (СТС)" sx={{
                                width: "50%", background: "#E8EDF5", borderRadius: "7px",
                                border: "none"
                            }}
                                type="number"
                                {...register("registration_sertificate")}
                            />
                        </div>
                    </div>

                    <div className={styles['transport-passport']}>

                        <h3>Паспорт транспортного средства</h3>

                        <FormControl fullWidth sx={{width: "50%"}}>
                                <InputLabel id="demo-simple-select-label">Паспорт транспортного средства</InputLabel>
                                <Select
                                    {...register("transmission")}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={adCategoryValue}
                                    label="Паспорт транспортного средства"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>Оригинал</MenuItem>
                                    <MenuItem value={2}>Дубликат</MenuItem>
                                </Select>
                            </FormControl>
                    </div>

                    <div className={styles['trasnport-search']}>
                    <TextField sx={{
                            width: "50%", background: "#E8EDF5", borderRadius: "7px",
                            border: "none"
                        }}  
                        type="number"
                            label="Владельцев по ПТС"
                            {...register("owners_by_pts")}
                        />
                    </div>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox {...register("car_purchased_for_rent")} />} label="Автомобиль приобретён для аренды" />
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
                                {...register("year_of_car_purchase")}
                            />

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={months}
                                sx={{ background: "#E8EDF5", border: "0", width: "100%" }}
                                renderInput={(params) => <TextField {...params} label='Месяц' />}
                            />
                        </div>

                        <FormGroup sx={{marginTop: "2em"}}>
                            <FormControlLabel control={<Checkbox defaultChecked {...register("on_guarantee")}  />} label="На гарантии" />
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
                            id="description"
                            {...register("description")}
                        />
                    </div>

                    <div className={styles.contacts}>

                        <h3>Контакты</h3>

                        <h4>Город продажи</h4>


                        <div className={styles['contact-form']}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={cities}
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
                            {/* <TextField label="+7 (987) 654 32-10" sx={{
                                width: "50%", background: "#E8EDF5", borderRadius: "7px",
                                border: "none"
                            }}></TextField> */}

                            <Controller
                                name="state_number"
                                control={control}
                                pattern={/[А-Яа-яЁёA-Za-z]/}
                                rules={{ required: true }}

                                render={({ field }) => (
                                    <InputMask
                                        {...field}

                                        mask="+9 (999) 999 99-99"
                                        maskChar='_'
                                        alwaysShowMask="false"
                                        style={{ textTransform: "uppercase", color: "#78839E", padding: "12px 24px", fontSize: "24px", width: "300px", background: "#E8EDF5", border: "1px solid gray"}}
                                        type="text"
                                    />
                                )}
                            />

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
                                <FormControlLabel control={<Checkbox defaultChecked {...register("ready_to_show_online")}/>} label="Готов показать онлайн" />
                                <p>Выберите, если готовы показать автомобиль покупателю по видеосвязи.</p>
                            </FormGroup>

                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked {...register("communication_only_in_chat")}/>} label="Общение только в чате" />
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
                        {...register("price")}
                        />
                    </div>

                    <Button variant="contained" sx={{
                        // color: '#fff',
                        // background: '#316BFE',
                        // borderRadius: "7px",
                        width: "100%",
                        margin: "2.5em 0",
                        // padding: "13px 0"
                    }} type="submit">Разместить объявление</Button>

                </div>


                {/* <div className={styles['filling-stroke']}>

                </div> */}
            </form>

        </Container>
    )
}

export default CreateAdvert;