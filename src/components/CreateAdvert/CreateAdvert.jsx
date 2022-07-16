import { React, useState } from 'react';
import Container from '@mui/material/Container';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Title from '../Title/Title';
import { Button } from '@mui/material';
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

function CreateAdvert() {
    const marks = [
        { label: 'Changan' },
        { label: 'Chery' },
        { label: 'Chevrolet' },
        { label: 'Citroen' },
        { label: 'Daewoo' },
        { label: 'Haval' },
        { label: 'Honda' },
    ];


    const [active, setActive] = useState("1");

    const handleClick = (event) => {
        // console.log(typeof event.target.id);
        setActive(event.target.id);
    }

    return (
        <Container sx={{ padding: "35px 0" }}>

            <BreadCrumbs />

            <section>
                <div className={styles.filling}>
                    <Title title="Разместить объявление аренды"></Title>

                    <div className={styles['choose-transport']}>

                        <Button variant="contained"
                            startIcon={<DirectionsCarIcon size="large" />}
                            key={1}
                            className={active == "1" ? 'active_button' : 'inactive_button'}
                            id={"1"}
                            onClick={handleClick}
                        >Автомобиль</Button>

                        <Button variant="contained"
                            startIcon={<LocalShippingIcon />}
                            key={2}
                            className={active == "2" ? 'active_button' : 'inactive_button'}
                            id={"2"}
                            onClick={handleClick}
                        >Коммерческое авто</Button>

                        <Button variant="contained"
                            startIcon={<TwoWheelerIcon />}
                            key={3}
                            className={active == "3" ? 'active_button' : 'inactive_button'}
                            id={"3"}
                            onClick={handleClick}
                        >Мото</Button>

                        <Button variant="contained"
                            startIcon={<SailingIcon />}
                            key={4}
                            className={active == "4" ? 'active_button' : 'inactive_button'}
                            id={"4"}
                            onClick={handleClick}
                        >Водный транспорт</Button>
                    </div>

                    <div className={styles['enter-model']}>
                        <h3>Введите марку автомобиля</h3>
                        <div style={{ color: "#316BFE", fontSize: "16px" }}>Разместить через VIN</div>
                    </div>

                    <div className={styles['brand-search-input']}>
                        <TextField sx={{
                            width: "100%", background: "#E8EDF5", borderRadius: "7px",
                            border: "none"
                        }} label="Марка" />
                    </div>

                    <div className={styles['brand-list']}>
                        <BrandsList />
                    </div>

                    <div className={styles['model-search-input']}>
                        <h3>Модель автомобиля</h3>

                        <TextField sx={{
                            width: "100%", background: "#E8EDF5", borderRadius: "7px",
                            border: "none"
                        }} label="Марка" />
                    </div>

                    <div className={styles['year-of-manufacture']}>
                        <h3>Год выпуска</h3>

                        <Button variant="contained"
                            key={5}
                            className={active == "5" ? 'active_button' : 'inactive_button'}
                            id={"5"}
                            onClick={handleClick}
                        >2010</Button>
                        <Button variant="contained"
                            key={6}
                            className={active == "6" ? 'active_button' : 'inactive_button'}
                            id={"6"}
                            onClick={handleClick}
                        >2009</Button>
                        <Button variant="contained"
                            key={7}
                            className={active == "7" ? 'active_button' : 'inactive_button'}
                            id={"7"}
                            onClick={handleClick}
                        >2008</Button>
                        <Button variant="contained"
                            key={8}
                            className={active == "8" ? 'active_button' : 'inactive_button'}
                            id={"8"}
                            onClick={handleClick}
                        >2007</Button>
                        <Button variant="contained"
                            key={9}
                            className={active == "9" ? 'active_button' : 'inactive_button'}
                            id={"9"}
                            onClick={handleClick}
                        >2006</Button>
                    </div>

                    <div className={styles['car-body-type']}>
                        <h3>Тип кузова</h3>

                        <div>
                            <Button variant="contained"
                                key={10}
                                className={active == "10" ? 'active_button' : 'inactive_button'}
                                id={"10"}
                                onClick={handleClick}
                            >Седан</Button>

                            <Button variant="contained"
                                key={11}
                                className={active == "11" ? 'active_button' : 'inactive_button'}
                                id={"11"}
                                onClick={handleClick}
                            >Купе</Button>
                        </div>
                    </div>

                    <div className={styles.engine}>
                        <h3>Двигатель</h3>

                        <div className={styles['type-of-engine']}>
                            <Button variant="contained"
                                key={12}
                                className={active == "12" ? 'active_button' : 'inactive_button'}
                                id={"12"}
                                onClick={handleClick}
                            >Бензин</Button>

                            <Button variant="contained"
                                key={13}
                                className={active == "13" ? 'active_button' : 'inactive_button'}
                                id={"13"}
                                onClick={handleClick}
                            >Дизель</Button>

                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Газобаллоное оборудование" />
                            </FormGroup>
                        </div>
                    </div>

                    <div className={styles['wheel-drive']}>
                        <h3>Привод</h3>

                        <Button variant="contained"
                            key={12}
                            className={active == "12" ? 'active_button' : 'inactive_button'}
                            id={"12"}
                            onClick={handleClick}
                        >Задний</Button>

                        <Button variant="contained"
                            key={13}
                            className={active == "13" ? 'active_button' : 'inactive_button'}
                            id={"13"}
                            onClick={handleClick}
                        >Полный</Button>
                    </div>

                    <div className={styles.transmission}>
                        <h3>Коробка передач</h3>

                        <Button variant="contained"
                            key={12}
                            className={active == "12" ? 'active_button' : 'inactive_button'}
                            id={"12"}
                            onClick={handleClick}
                        >Механическая</Button>

                        <Button variant="contained"
                            key={13}
                            className={active == "13" ? 'active_button' : 'inactive_button'}
                            id={"13"}
                            onClick={handleClick}
                        >Автоматическая</Button>
                    </div>

                    <div className={styles.modification}>
                        <h3>Модификация</h3>

                        <Button variant="contained"
                            key={13}
                            className={active == "13" ? 'active_button' : 'inactive_button'}
                            id={"13"}
                            onClick={handleClick}
                            style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}
                        >
                            <div>105 л.с.</div>
                            <div>2.0 АТ</div>
                            <div>2008-2010</div>
                        </Button>

                        <Button variant="contained"
                            key={13}
                            className={active == "13" ? 'active_button' : 'inactive_button'}
                            id={"13"}
                            onClick={handleClick}
                            style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}
                        >
                            <div>105 л.с.</div>
                            <div>2.0 АТ</div>
                            <div>2008-2010</div>
                        </Button>

                        <Button variant="contained"
                            key={13}
                            className={active == "13" ? 'active_button' : 'inactive_button'}
                            id={"13"}
                            onClick={handleClick}
                            style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}
                        >
                            <div>105 л.с.</div>
                            <div>2.0 АТ</div>
                            <div>2008-2010</div>
                        </Button>

                        <Button variant="contained"
                            key={13}
                            className={active == "13" ? 'active_button' : 'inactive_button'}
                            id={"13"}
                            onClick={handleClick}
                            style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}
                        >
                            <div>105 л.с.</div>
                            <div>2.0 АТ</div>
                            <div>2008-2010</div>
                        </Button>

                        <Button variant="contained"
                            key={13}
                            className={active == "13" ? 'active_button' : 'inactive_button'}
                            id={"13"}
                            onClick={handleClick}
                            style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}
                        >
                            <div>105 л.с.</div>
                            <div>2.0 АТ</div>
                            <div>2008-2010</div>
                        </Button>
                    </div>

                    <div className={styles['pick-color']}>

                        <h3>Цвет</h3>

                        <button><div style={{ background: "#ffffff", border: "1px solid black" }}></div></button>
                        <button><div style={{ background: "#C1C1C1" }}></div></button>
                        <button><div style={{ background: "#FFEFD5" }}></div></button>
                        <button><div style={{ background: "#FDE910" }}></div></button>
                        <button><div style={{ background: "#FABE00" }}></div></button>
                        <button><div style={{ background: "#FF9966" }}></div></button>
                        <button><div style={{ background: "#FFC0CB" }}></div></button>
                        <button><div style={{ background: "#FF2600" }}></div></button>
                        <button><div style={{ background: "#CC1D33" }}></div></button>
                        <button><div style={{ background: "#926547" }}></div></button>
                        <button><div style={{ background: "#0088FF" }}></div></button>
                        <button><div style={{ background: "#0433FF" }}></div></button>
                        <button><div style={{ background: "#9966CC" }}></div></button>
                        <button><div style={{ background: "#9C9999" }}></div></button>
                        <button><div style={{ background: "#000000" }}></div></button>
                    </div>

                    <div className={styles.mileage}>

                        <h3>Пробег</h3>

                        <TextField label="км" sx={{
                            width: "50%", background: "#E8EDF5", borderRadius: "7px",
                            border: "none"
                        }}></TextField>

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
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Автомобиль не на учёте в РФ" />
                            </FormGroup>
                        </div>

                        <div className={styles['goverment-input']}>
                            <TextField label="VIN или Номер кузова" sx={{
                                width: "50%", background: "#E8EDF5", borderRadius: "7px",
                                border: "none"
                            }}></TextField>
                        </div>

                        <div className={styles['goverment-input']}>
                            <TextField label="Свидетельство о регистрации (СТС)" sx={{
                                width: "50%", background: "#E8EDF5", borderRadius: "7px",
                                border: "none"
                            }}></TextField>
                        </div>
                    </div>

                    <div className={styles['transport-passport']}>

                        <h3>Паспорт транспортного средства</h3>

                        <Button variant="contained"
                            key={3}
                            className={active == "3" ? 'active_button' : 'inactive_button'}
                            id={"3"}
                            onClick={handleClick}
                        >Оригинал</Button>

                        <Button variant="contained"
                            key={4}
                            className={active == "4" ? 'active_button' : 'inactive_button'}
                            id={"4"}
                            onClick={handleClick}
                        >Дубликат</Button>
                    </div>

                    <div className={styles['trasnport-search']}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={marks}
                            sx={{ width: "50%", background: "#E8EDF5", border: "0" }}
                            renderInput={(params) => <TextField {...params} label='Владельцев по ПТС' />}
                        />
                    </div>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Автомобиль приобретён для аренды" />
                    </FormGroup>

                    <div className={styles['date-of-purchase']}>

                        <h3>Дата покупки авто</h3>

                        <div className={styles['choosing-date']}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={marks}
                                sx={{ background: "#E8EDF5", border: "0" }}
                                renderInput={(params) => <TextField {...params} label='Год' />}
                            />

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={marks}
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

                        <p style={{color: "#78839E", width: "500px"}}>На фотографиях не должно быть контактов, надписей, людей,
                            водяных знаков и любых посторонних предметов.</p>
                    </div>
                </div>

                <div className={styles['filling-stroke']}>

                </div>
            </section>

        </Container>
    )
}

export default CreateAdvert;