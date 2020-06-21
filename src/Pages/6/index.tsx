import React from "react";
import {Link} from "react-router-dom";
import "./s.css";

let binded = false;
const idList = ["n5_3839", "n5_3844", "n5_3849", "n5_3938", "n5_3812"];
// n4_645
const breakPoints = [264, 698, 2273, 2725, 3000];

const scrollPoint = (i: number) => {
    console.log(breakPoints[i]);
    for(let j = 0;j < 6; j++) {
        // @ts-ignore
        document.getElementById('n5_4120').getElementsByTagName('div')[j].style.color = "rgb(0, 122, 255)";
    }
    window.scrollTo(0, breakPoints[i]);
};

export default function () {
    if(!binded) {
        binded = true;

        window.onscroll = (e: Event) => {
            const el = document.getElementById("n5_4120");
            if(el) {
                let scroll = (document.documentElement.scrollTop || document.body.scrollTop);
                if (scroll > 265) {
                    el.style.position = "fixed";
                    el.style.top = "30px";
                } else {
                    el.style.position = "absolute";
                    el.style.top = "265px";
                }

                for(let i = breakPoints.length - 1; i >= 0; i--) {
                    if(scroll > breakPoints[i] - 200) {
                        // @ts-ignore
                        document.getElementById('n5_4120').getElementsByTagName('div')[i+1].style.color = "#000";
                        // @ts-ignore
                        (i > 1) && (document.getElementById('n5_4120').getElementsByTagName('div')[i].style.color = "rgb(0, 122, 255)");
                        // @ts-ignore
                        (i < 4) && (document.getElementById('n5_4120').getElementsByTagName('div')[i+2].style.color = "rgb(0, 122, 255)");
                        break;
                    }
                }
            }
        };
    }
    return <div className="frame" id="n5_3810">
        
        <div className="center top text" id="n5_3811"> 1.1    &nbsp;Дисциплина «Схемотехника интерфейсов сбора и обмена
            информацией в АИС» имеет целью формирование системного базового представления, первичных знаний, умений и
            навыков студентов по схемотехнике и компонентам цифровых схем; разновидностям и способам применения
            современных интерфейсов;<br/> 1.2    &nbsp;анализу схем существующих интерфейсных устройств и способам их
                реализации;<br/> 1.3    &nbsp;алгоритмам, реализующим управление обменом информацией посредством
                    стандартных интерфейсов между отдельными частями автоматизированных систем; способам кодирования и
                    защиты информации от ошибок при ее передаче интерфейсными устройствами
        </div>
        
        <div className="center top text" id="n5_3812">Описание программы</div>
        
        <div className="center frame" id="n5_3814">
            
            <div className="component left top instance" id="n5_3815">
                
                <div className="left_right bottom rectangle" id="nI5_3815-5_185"></div>
                
                <div className="frame" id="nI5_3815-5_207">
                    
                    <div className="left top text" id="nI5_3815-5_208">34.2</div>
                </div>
                
                <div className="frame" id="nI5_3815-5_202">
                    
                    <div className="left top text" id="nI5_3815-5_203">Cхемотехника интерфейсов сбора обмена информацией
                        аис
                    </div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3816">
                
                <div className="left_right top_bottom rectangle" id="nI5_3816-5_184"></div>
                
                <div className="left_right bottom rectangle" id="nI5_3816-5_185"></div>
                
                <div className="frame" id="nI5_3816-5_207">
                    
                    <div className="left top text" id="nI5_3816-5_208">27.5</div>
                </div>
                
                <div className="frame" id="nI5_3816-5_202">
                    
                    <div className="left top text" id="nI5_3816-5_203">Искусственный интеллект<br/>
                    </div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3817">
                
                <div className="left_right bottom rectangle" id="nI5_3817-5_185"></div>
                
                <div className="frame" id="nI5_3817-5_207">
                    
                    <div className="left top text" id="nI5_3817-5_208">26.3</div>
                </div>
                
                <div className="frame" id="nI5_3817-5_202">
                    
                    <div className="left top text" id="nI5_3817-5_203">Программируемые логические контроллеры</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3818">
                
                <div className="left_right bottom rectangle" id="nI5_3818-5_185"></div>
                
                <div className="frame" id="nI5_3818-5_207">
                    
                    <div className="left top text" id="nI5_3818-5_208">19.1</div>
                </div>
                
                <div className="frame" id="nI5_3818-5_202">
                    
                    <div className="left top text" id="nI5_3818-5_203">Программное обеспечение проектной деятельности
                    </div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3819">
                
                <div className="left_right bottom rectangle" id="nI5_3819-5_185"></div>
                
                <div className="frame" id="nI5_3819-5_207">
                    
                    <div className="left top text" id="nI5_3819-5_208">17.2</div>
                </div>
                
                <div className="frame" id="nI5_3819-5_202">
                    
                    <div className="left top text" id="nI5_3819-5_203">Теория принятия решений</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3820">
                
                <div className="left_right bottom rectangle" id="nI5_3820-5_185"></div>
                
                <div className="frame" id="nI5_3820-5_207">
                    
                    <div className="left top text" id="nI5_3820-5_208">15.1</div>
                </div>
                
                <div className="frame" id="nI5_3820-5_202">
                    
                    <div className="left top text" id="nI5_3820-5_203">Теоретические основы автоматизированного
                        управления
                    </div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3821">
                
                <div className="left_right bottom rectangle" id="nI5_3821-5_185"></div>
                
                <div className="frame" id="nI5_3821-5_207">
                    
                    <div className="left top text" id="nI5_3821-5_208">6.4</div>
                </div>
                
                <div className="frame" id="nI5_3821-5_202">
                    
                    <div className="left top text" id="nI5_3821-5_203">Web программирование</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3822">
                
                <div className="left_right bottom rectangle" id="nI5_3822-5_185"></div>
                
                <div className="frame" id="nI5_3822-5_207">
                    
                    <div className="left top text" id="nI5_3822-5_208">5.9</div>
                </div>
                
                <div className="frame" id="nI5_3822-5_202">
                    
                    <div className="left top text" id="nI5_3822-5_203">Автоматизированные системы обработки информации
                        управления
                    </div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3823">
                
                <div className="left_right bottom rectangle" id="nI5_3823-5_185"></div>
                
                <div className="frame" id="nI5_3823-5_207">
                    
                    <div className="left top text" id="nI5_3823-5_208">4.4</div>
                </div>
                
                <div className="frame" id="nI5_3823-5_202">
                    
                    <div className="left top text" id="nI5_3823-5_203">Системы хранения информации</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3824">
                
                <div className="left_right bottom rectangle" id="nI5_3824-5_185"></div>
                
                <div className="frame" id="nI5_3824-5_207">
                    
                    <div className="left top text" id="nI5_3824-5_208">3.7</div>
                </div>
                
                <div className="frame" id="nI5_3824-5_202">
                    
                    <div className="left top text" id="nI5_3824-5_203">Техническая поддержка информационных систем</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3825">
                
                <div className="left_right bottom rectangle" id="nI5_3825-5_185"></div>
                
                <div className="frame" id="nI5_3825-5_207">
                    
                    <div className="left top text" id="nI5_3825-5_208">15.1</div>
                </div>
                
                <div className="frame" id="nI5_3825-5_202">
                    
                    <div className="left top text" id="nI5_3825-5_203">Единая информационная среда</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3826">
                
                <div className="left_right bottom rectangle" id="nI5_3826-5_185"></div>
                
                <div className="frame" id="nI5_3826-5_207">
                    
                    <div className="left top text" id="nI5_3826-5_208">6.4</div>
                </div>
                
                <div className="frame" id="nI5_3826-5_202">
                    
                    <div className="left top text" id="nI5_3826-5_203">Микропроцессорная техника</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3827">
                
                <div className="left_right bottom rectangle" id="nI5_3827-5_185"></div>
                
                <div className="frame" id="nI5_3827-5_207">
                    
                    <div className="left top text" id="nI5_3827-5_208">5.9</div>
                </div>
                
                <div className="frame" id="nI5_3827-5_202">
                    
                    <div className="left top text" id="nI5_3827-5_203">Проектирование интеллектуальных информационных
                        систем
                    </div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3828">
                
                <div className="left_right bottom rectangle" id="nI5_3828-5_185"></div>
                
                <div className="frame" id="nI5_3828-5_207">
                    
                    <div className="left top text" id="nI5_3828-5_208">4.4</div>
                </div>
                
                <div className="frame" id="nI5_3828-5_202">
                    
                    <div className="left top text" id="nI5_3828-5_203">Вычислительные сети</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_3829">
                
                <div className="left_right bottom rectangle" id="nI5_3829-5_185"></div>
                
                <div className="frame" id="nI5_3829-5_207">
                    
                    <div className="left top text" id="nI5_3829-5_208">3.7</div>
                </div>
                
                <div className="frame" id="nI5_3829-5_202">
                    
                    <div className="left top text" id="nI5_3829-5_203">Сетевые технологии аис</div>
                </div>
            </div>
        </div>
        
        <div className="center frame" id="n5_3830">
            
            <div className="scale frame" id="n5_3831">
                
                <div className="frame" id="n5_3833">
                    
                    <div className="center text" id="n5_3834">􀆈</div>
                </div>
                
                <div className="left top text" id="n5_3835">Все программы</div>
            </div>
            
            <div className="scale text" id="n5_3836">Популярность</div>
            
            <div className="scale frame" id="n5_3837">
                
                <div className="left_right center rectangle" id="n5_3838"></div>
            </div>
        </div>
        
        <div className="center frame" id="n5_3839">
            
            <div className="center top text" id="n5_3840">Общая оценка</div>
            
            <div className="center top text" id="n5_3841">9,1 балла</div>
        </div>
        
        <div className="center frame" id="n5_3844">
            
            <div className="left top text" id="n5_3845">Актуальность рабочей программы</div>
            
            <div className="center top text" id="n5_3846">Это относительный показатель, отражающий насколько часто в
                интернете искали слова из описания рабочей программы за последние 5 лет.
            </div>
            
            <div className="center top text" id="n5_3847">9,4 балла</div>
            
            <div className="center top text" id="n5_3848">Относительная популярность среди всех программ</div>
        </div>
        
        <div className="center frame" id="n5_3849">
            
            <div className="left top text" id="n5_3850">Преподаватели</div>
            
            <div className="left_right top_bottom frame" id="n5_3851">
                
                <div className="left_right top_bottom frame" id="n5_3852">
                    
                    <div className="left_right top_bottom rectangle" id="n5_3853"></div>
                </div>
                
                <img
                    src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4545/33a8/a246a4279d7ca1b180367f3d0abc0a9e"
                    width="44" height="52" className="right top_bottom vector" id="n5_3854"/>
                    
                    <div className="right frame" id="n5_3855">
                        
                        <img
                            src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a397/3d59/626c730053d896bb86086da4477e4050"
                            width="12" height="7" className="scale vector" id="n5_3856"/></div>
                    
                    <div className="left_right top_bottom text" id="n5_3860">Филимонов Максим Николаевич</div>
            </div>
            
            <div className="center top text" id="n5_3861">Персональный рейтинг</div>
            
            <div className="center top text" id="n5_3862">8,6 балла</div>
        </div>
        
        <div className="center frame" id="n5_3863">
            
            <div className="center top text" id="n5_3864">6,2</div>
            
            <div className="center top text" id="n5_3865">8,1</div>
            
            <div className="center top text" id="n5_3866">7,6</div>
            
            <div className="center top text" id="n5_3867">7,2</div>
            
            <div className="center top text" id="n5_3868">Реализованные инновационные проекты</div>
            
            <div className="center top text" id="n5_3869">Опубликованно статей</div>
            
            <div className="center top text" id="n5_3870">Рейтинг цитирования</div>
            
            <div className="center top text" id="n5_3871">Дисперсия оценок</div>
        </div>
        
        <div className="center frame" id="n5_3938">
            
            <div className="left top text" id="n5_3939">Капитализация выпускников</div>
            
            <div className="center top text" id="n5_3940">8,1 балла</div>
        </div>
        
        <div className="center frame" id="n5_3948">
            
            <div className="center top text" id="n5_3949">0,34</div>
            
            <div className="center top text" id="n5_3950">61%</div>
            
            <div className="center top text" id="n5_3951">1.12</div>
            
            <div className="center top text" id="n5_3952">Соотношение количества вакансий к резюме</div>
            
            <div className="center top text" id="n5_3953">Выпускников, трудоустроенны в ведущих компаниях в течении года
                после обучения
            </div>
            
            <div className="center top text" id="n5_3954">Отношение средней з/п выпускника первый год после выпуска к
                средней по региону
            </div>
        </div>
        
        <div className="center frame" id="n5_3955">
            
            <div className="center frame" id="n5_3956">
                
                <div className="component left top instance" id="n5_3957">
                    
                    <div className="left_right bottom rectangle" id="nI5_3957-5_185"></div>
                    
                    <div className="frame" id="nI5_3957-5_186">
                        
                        <div className="left top text" id="nI5_3957-5_187">Плис</div>
                    </div>
                    
                    <div className="frame" id="nI5_3957-5_207"></div>
                    
                    <div className="frame" id="nI5_3957-5_202">
                        
                        <div className="left top text" id="nI5_3957-5_203">Плис</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_3958">
                    
                    <div className="left_right bottom rectangle" id="nI5_3958-5_185"></div>
                    
                    <div className="frame" id="nI5_3958-5_186">
                        
                        <div className="left top text" id="nI5_3958-5_187">Ассемблер</div>
                    </div>
                    
                    <div className="frame" id="nI5_3958-5_207"></div>
                    
                    <div className="frame" id="nI5_3958-5_202">
                        
                        <div className="left top text" id="nI5_3958-5_203">Ассемблер</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_3959">
                    
                    <div className="left_right bottom rectangle" id="nI5_3959-5_185"></div>
                    
                    <div className="frame" id="nI5_3959-5_186">
                        
                        <div className="left top text" id="nI5_3959-5_187">Автоматика</div>
                    </div>
                    
                    <div className="frame" id="nI5_3959-5_207"></div>
                    
                    <div className="frame" id="nI5_3959-5_202">
                        
                        <div className="left top text" id="nI5_3959-5_203">Автоматика</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_3960">
                    
                    <div className="left_right bottom rectangle" id="nI5_3960-5_185"></div>
                    
                    <div className="frame" id="nI5_3960-5_186">
                        
                        <div className="left top text" id="nI5_3960-5_187">Алгоритмы</div>
                    </div>
                    
                    <div className="frame" id="nI5_3960-5_207"></div>
                    
                    <div className="frame" id="nI5_3960-5_202">
                        
                        <div className="left top text" id="nI5_3960-5_203">Алгоритмы</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_3961">
                    
                    <div className="left_right bottom rectangle" id="nI5_3961-5_185"></div>
                    
                    <div className="frame" id="nI5_3961-5_186">
                        
                        <div className="left top text" id="nI5_3961-5_187">Исполнительные устройства</div>
                    </div>
                    
                    <div className="frame" id="nI5_3961-5_207"></div>
                    
                    <div className="frame" id="nI5_3961-5_202">
                        
                        <div className="left top text" id="nI5_3961-5_203">Исполнительные устройства</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_3962">
                    
                    <div className="left_right bottom rectangle" id="nI5_3962-5_185"></div>
                    
                    <div className="frame" id="nI5_3962-5_186">
                        
                        <div className="left top text" id="nI5_3962-5_187">Техническая эксплуатация</div>
                    </div>
                    
                    <div className="frame" id="nI5_3962-5_207"></div>
                    
                    <div className="frame" id="nI5_3962-5_202">
                        
                        <div className="left top text" id="nI5_3962-5_203">системы ЧПУ</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_3963">
                    
                    <div className="left_right bottom rectangle" id="nI5_3963-5_185"></div>
                    
                    <div className="frame" id="nI5_3963-5_186">
                        
                        <div className="left top text" id="nI5_3963-5_187">Электротехника</div>
                    </div>
                    
                    <div className="frame" id="nI5_3963-5_207"></div>
                    
                    <div className="frame" id="nI5_3963-5_202">
                        
                        <div className="left top text" id="nI5_3963-5_203">Mathcad</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_3964">
                    
                    <div className="left_right bottom rectangle" id="nI5_3964-5_185"></div>
                    
                    <div className="frame" id="nI5_3964-5_186">
                        
                        <div className="left top text" id="nI5_3964-5_187">C/C++</div>
                    </div>
                    
                    <div className="frame" id="nI5_3964-5_207"></div>
                    
                    <div className="frame" id="nI5_3964-5_202">
                        
                        <div className="left top text" id="nI5_3964-5_203">Компас-3D</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_3965">
                    
                    <div className="left_right bottom rectangle" id="nI5_3965-5_185"></div>
                    
                    <div className="frame" id="nI5_3965-5_186">
                        
                        <div className="left top text" id="nI5_3965-5_187">Ведение документации</div>
                    </div>
                    
                    <div className="frame" id="nI5_3965-5_207"></div>
                    
                    <div className="frame" id="nI5_3965-5_202">
                        
                        <div className="left top text" id="nI5_3965-5_203">Монтаж оборудования</div>
                    </div>
                </div>
            </div>
            
            <div className="center frame" id="n5_3966">
                
                <div className="scale frame" id="n5_3967">
                    
                    <div className="left top text" id="n5_3971">Ключевые навыки выпускника</div>
                </div>
                
                <div className="scale text" id="n5_3974">Требуемые навыки на рынке труда</div>
                
                <div className="scale frame" id="n5_3975">
                    
                    <div className="left_right center rectangle" id="n5_3976"></div>
                </div>
            </div>
        </div>
        
        <div className="center frame" id="n5_4069">
            
            <div className="center top text" id="n5_4070">Данный анализ показывает частоту упоминаний дисциплин из
                рабочей программы в 1ом квартиле статей журнала Scopus за последние 2 года и общий показатель
                популярности среди всех дисциплин во всех рабочих программах
            </div>
            
            <div className="center frame" id="n5_4071">
                
                <div className="component left top instance" id="n5_4072">
                    
                    <div className="left_right bottom rectangle" id="nI5_4072-5_185"></div>
                    
                    <div className="frame" id="nI5_4072-5_186">
                        
                        <div className="left top text" id="nI5_4072-5_187">19.1</div>
                    </div>
                    
                    <div className="frame" id="nI5_4072-5_207">
                        
                        <div className="left top text" id="nI5_4072-5_208">15%</div>
                    </div>
                    
                    <div className="frame" id="nI5_4072-5_202">
                        
                        <div className="left top text" id="nI5_4072-5_203">Дискретная математика</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_4073">
                    
                    <div className="left_right bottom rectangle" id="nI5_4073-5_185"></div>
                    
                    <div className="frame" id="nI5_4073-5_186">
                        
                        <div className="left top text" id="nI5_4073-5_187">6.4</div>
                    </div>
                    
                    <div className="frame" id="nI5_4073-5_207">
                        
                        <div className="left top text" id="nI5_4073-5_208">23%</div>
                    </div>
                    
                    <div className="frame" id="nI5_4073-5_202">
                        
                        <div className="left top text" id="nI5_4073-5_203">Информационные системы управления</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_4074">
                    
                    <div className="left_right bottom rectangle" id="nI5_4074-5_185"></div>
                    
                    <div className="frame" id="nI5_4074-5_186">
                        
                        <div className="left top text" id="nI5_4074-5_187">13.2</div>
                    </div>
                    
                    <div className="frame" id="nI5_4074-5_207">
                        
                        <div className="left top text" id="nI5_4074-5_208">7%</div>
                    </div>
                    
                    <div className="frame" id="nI5_4074-5_202">
                        
                        <div className="left top text" id="nI5_4074-5_203">Методы оптимизации<br/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="center frame" id="n5_4075">
                
                <div className="scale frame" id="n5_4076">
                    
                    <div className="left top text" id="n5_4080">Тема дисциплины</div>
                </div>
                
                <div className="scale text" id="n5_4083">Упоминания в Scopus</div>
                
                <div className="scale text" id="n5_4084">Пополярность</div>
                
                <div className="scale text" id="n5_4085">Min 2,2</div>
                
                <div className="scale text" id="n5_4086">Мax 39,8</div>
                
                <div className="scale frame" id="n5_4087">
                    
                    <div className="left_right center rectangle" id="n5_4088"></div>
                </div>
            </div>
            
            <div className="scale text" id="n5_4089">За 2 года</div>
            
            <div className="center top text" id="n5_4090">Популярность дисциплин рабочей программы</div>
        </div>
        
        <div className="center frame" id="n5_4091">
            
            <div className="center top text" id="n5_4092">6,2</div>
            
            <div className="center top text" id="n5_4093">8,1</div>
            
            <div className="center top text" id="n5_4094">7,6</div>
            
            <div className="center top text" id="n5_4095">7,2</div>
            
            <div className="center top text" id="n5_4096">Соответствие рабочих программ современным трендам</div>
            
            <div className="center top text" id="n5_4097">Средняя оценка преподавателей от студентов</div>
            
            <div className="center top text" id="n5_4098">Результативность студентов на данной программе</div>
            
            <div className="center top text" id="n5_4099">Востребованность выпускников на рынке труда</div>
        </div>
        
        <div className="center top rectangle" id="n5_4350"></div>
        
        <div className="center frame" id="n5_4120">
            
            <div className="frame" id="n5_4351">
                
                <div className="left top text" id="n5_4121" onClick={() => scrollPoint(0)}>Общая оценка</div>
                
                <div className="left top text" id="n5_4123" onClick={() => scrollPoint(1)}>Актуальность рабочей программы</div>
                
                <div className="left top text" id="n5_4124" onClick={() => scrollPoint(2)}>Преподаватели</div>
                
                <div className="left top text" id="n5_4126" onClick={() => scrollPoint(3)}>Капитализация выпускников</div>
                
                <div className="left top text" id="n5_4127" onClick={() => scrollPoint(4)}>Описание программы</div>
            </div>
        </div>
        
        <div className="center top rectangle" id="n5_4129"></div>
        
        <div className="center frame" id="n5_4130">
            
            <div className="right top rectangle" id="n5_4131"></div>
            
            <div className="group" id="n5_4132">
                
                <div className="left top text" id="n5_4133">ДГТУ</div>
                
                <div className="left top text" id="n5_4134">/</div>
                
                <div className="left top text" id="n5_4135">Программы</div>
            </div>
        </div>
        
        <div className="center frame" id="n5_4136">
            
            <div className="frame" id="n5_4143">
                
                <div className="left top text" id="n5_4144">Искусственный интеллект</div>
            </div>
            
            <div className="frame" id="n5_4145">
                
                <div className="left top text" id="n5_4146"><Link to={"/programs/new"}>Назад</Link></div>
                
                <div className="component left top instance" id="n5_4147">
                    
                    <img
                        src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3680/56b1/3643f8fa9d14f04c675bf62f74dd9ae5"
                        width="11" height="19" className="scale vector" id="nI5_4147-4_620"/></div>
            </div>
        </div>
    </div>
}