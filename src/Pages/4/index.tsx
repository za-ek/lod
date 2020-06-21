import React from "react";
import {Link} from "react-router-dom";
import "./s.css";

let binded = false;
const idList = ["n4_650", "n4_675", "n5_602", "n5_607", "n5_1902", "n5_2628", "n5_2748"];
// n4_645
const breakPoints = [264, 717, 1154, 2729, 4168, 5369, 6287];

const scrollPoint = (i: number) => {
    console.log(breakPoints[i]);
    for(let j = 0;j < 7; j++) {
        // @ts-ignore
        document.getElementById('n4_645').getElementsByTagName('div')[j].style.color = "rgb(0, 122, 255)";
    }
    window.scrollTo(0, breakPoints[i]);
};

export default function () {
    if(!binded) {
        binded = true;

        window.onscroll = (e: Event) => {
            const el = document.getElementById("n4_645");
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
                        document.getElementById('n4_645').getElementsByTagName('div')[i].style.color = "#000";
                        // @ts-ignore
                        (i > 1) && (document.getElementById('n4_645').getElementsByTagName('div')[i-1].style.color = "rgb(0, 122, 255)");
                        // @ts-ignore
                        document.getElementById('n4_645').getElementsByTagName('div')[i+1].style.color = "rgb(0, 122, 255)";
                        break;
                    }
                }
            }
        };
    }
    return <div className="frame" id="n4_274">

        <div className="center top text" id="n5_2747"> 1.1    &nbsp;Дисциплина «Схемотехника интерфейсов сбора и обмена
            информацией в АИС» имеет целью формирование системного базового представления, первичных знаний, умений и
            навыков студентов по схемотехнике и компонентам цифровых схем; разновидностям и способам применения
            современных интерфейсов;<br/> 1.2    &nbsp;анализу схем существующих интерфейсных устройств и способам их
                реализации;<br/> 1.3    &nbsp;алгоритмам, реализующим управление обменом информацией посредством
                    стандартных интерфейсов между отдельными частями автоматизированных систем; способам кодирования и
                    защиты информации от ошибок при ее передаче интерфейсными устройствами
        </div>
        
        <div className="center top text" id="n5_2748">Описание программы</div>
        
        <div className="center top text" id="n4_654">Документы</div>
        
        <div className="center frame" id="n5_300">
            
            <div className="component left top instance" id="n5_301">
                
                <div className="left_right bottom rectangle" id="nI5_301-5_185"></div>
                
                <div className="frame" id="nI5_301-5_207">
                    
                    <div className="left top text" id="nI5_301-5_208">34.2</div>
                </div>
                
                <div className="frame" id="nI5_301-5_202">
                    
                    <div className="left top text" id="nI5_301-5_203">Eдиная информационная среда</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_302">
                
                <div className="left_right bottom rectangle" id="nI5_302-5_185"></div>
                
                <div className="frame" id="nI5_302-5_207">
                    
                    <div className="left top text" id="nI5_302-5_208">27.5</div>
                </div>
                
                <div className="frame" id="nI5_302-5_202">
                    
                    <div className="left top text" id="nI5_302-5_203">Искусственный интеллект<br/>
                    </div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_303">
                
                <div className="left_right bottom rectangle" id="nI5_303-5_185"></div>
                
                <div className="frame" id="nI5_303-5_207">
                    
                    <div className="left top text" id="nI5_303-5_208">26.3</div>
                </div>
                
                <div className="frame" id="nI5_303-5_202">
                    
                    <div className="left top text" id="nI5_303-5_203">Техническая поддержка информационных систем</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_304">
                
                <div className="left_right top_bottom rectangle" id="nI5_304-5_184"></div>
                
                <div className="left_right bottom rectangle" id="nI5_304-5_185"></div>
                
                <div className="frame" id="nI5_304-5_207">
                    
                    <div className="left top text" id="nI5_304-5_208">19.1</div>
                </div>
                
                <div className="frame" id="nI5_304-5_202">
                    
                    <div className="left top text" id="nI5_304-5_203">Сетевые хранилища данных<br/>
                    </div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_305">
                
                <div className="left_right bottom rectangle" id="nI5_305-5_185"></div>
                
                <div className="frame" id="nI5_305-5_207">
                    
                    <div className="left top text" id="nI5_305-5_208">17.2</div>
                </div>
                
                <div className="frame" id="nI5_305-5_202">
                    
                    <div className="left top text" id="nI5_305-5_203">Дискретная математика</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_306">
                
                <div className="left_right bottom rectangle" id="nI5_306-5_185"></div>
                
                <div className="frame" id="nI5_306-5_207">
                    
                    <div className="left top text" id="nI5_306-5_208">15.1</div>
                </div>
                
                <div className="frame" id="nI5_306-5_202">
                    
                    <div className="left top text" id="nI5_306-5_203">Дискретная математика</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_307">
                
                <div className="left_right bottom rectangle" id="nI5_307-5_185"></div>
                
                <div className="frame" id="nI5_307-5_207">
                    
                    <div className="left top text" id="nI5_307-5_208">6.4</div>
                </div>
                
                <div className="frame" id="nI5_307-5_202">
                    
                    <div className="left top text" id="nI5_307-5_203">Дискретная математика</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_308">
                
                <div className="left_right bottom rectangle" id="nI5_308-5_185"></div>
                
                <div className="frame" id="nI5_308-5_207">
                    
                    <div className="left top text" id="nI5_308-5_208">5.9</div>
                </div>
                
                <div className="frame" id="nI5_308-5_202">
                    
                    <div className="left top text" id="nI5_308-5_203">Дискретная математика</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_309">
                
                <div className="left_right bottom rectangle" id="nI5_309-5_185"></div>
                
                <div className="frame" id="nI5_309-5_207">
                    
                    <div className="left top text" id="nI5_309-5_208">4.4</div>
                </div>
                
                <div className="frame" id="nI5_309-5_202">
                    
                    <div className="left top text" id="nI5_309-5_203">Дискретная математика</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_310">
                
                <div className="left_right bottom rectangle" id="nI5_310-5_185"></div>
                
                <div className="frame" id="nI5_310-5_207">
                    
                    <div className="left top text" id="nI5_310-5_208">3.7</div>
                </div>
                
                <div className="frame" id="nI5_310-5_202">
                    
                    <div className="left top text" id="nI5_310-5_203">Дискретная математика</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_1856">
                
                <div className="left_right bottom rectangle" id="nI5_1856-5_185"></div>
                
                <div className="frame" id="nI5_1856-5_207">
                    
                    <div className="left top text" id="nI5_1856-5_208">15.1</div>
                </div>
                
                <div className="frame" id="nI5_1856-5_202">
                    
                    <div className="left top text" id="nI5_1856-5_203">Дискретная математика</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_1857">
                
                <div className="left_right bottom rectangle" id="nI5_1857-5_185"></div>
                
                <div className="frame" id="nI5_1857-5_207">
                    
                    <div className="left top text" id="nI5_1857-5_208">6.4</div>
                </div>
                
                <div className="frame" id="nI5_1857-5_202">
                    
                    <div className="left top text" id="nI5_1857-5_203">Дискретная математика</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_1858">
                
                <div className="left_right bottom rectangle" id="nI5_1858-5_185"></div>
                
                <div className="frame" id="nI5_1858-5_207">
                    
                    <div className="left top text" id="nI5_1858-5_208">5.9</div>
                </div>
                
                <div className="frame" id="nI5_1858-5_202">
                    
                    <div className="left top text" id="nI5_1858-5_203">Дискретная математика</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_1859">
                
                <div className="left_right bottom rectangle" id="nI5_1859-5_185"></div>
                
                <div className="frame" id="nI5_1859-5_207">
                    
                    <div className="left top text" id="nI5_1859-5_208">4.4</div>
                </div>
                
                <div className="frame" id="nI5_1859-5_202">
                    
                    <div className="left top text" id="nI5_1859-5_203">Дискретная математика</div>
                </div>
            </div>
            
            <div className="component left top instance" id="n5_1860">
                
                <div className="left_right bottom rectangle" id="nI5_1860-5_185"></div>
                
                <div className="frame" id="nI5_1860-5_207">
                    
                    <div className="left top text" id="nI5_1860-5_208">3.7</div>
                </div>
                
                <div className="frame" id="nI5_1860-5_202">
                    
                    <div className="left top text" id="nI5_1860-5_203">Дискретная математика</div>
                </div>
            </div>
        </div>
        
        <div className="center frame" id="n5_311">
            
            <div className="scale frame" id="n5_312">
                
                <div className="frame" id="n5_314">
                    
                    <div className="center text" id="n5_315">􀆈</div>
                </div>
                
                <div className="left top text" id="n5_316">Все программы</div>
            </div>
            
            <div className="scale text" id="n5_320">Популярность</div>
            
            <div className="scale frame" id="n5_321">
                
                <div className="left_right center rectangle" id="n5_322"></div>
            </div>
        </div>
        
        <div className="center frame" id="n5_597">
            
            <div className="center top text" id="n4_650">Общая оценка</div>
            
            <div className="center top text" id="n4_655">7,4 балла</div>
            
            <div className="center top text" id="n4_672">Программа нуждается в доработке</div>
            
            <div className="center top text" id="n4_673">Мы подготовили несколько инсайтов, чтобы вам было проще
                исправить текущую оценку.
            </div>
        </div>
        
        <div className="center frame" id="n5_602">
            
            <div className="left top text" id="n5_91">Актуальность рабочей программы</div>
            
            <div className="center top text" id="n5_92">Это относительный показатель, отражающий насколько часто в
                интернете искали слова из описания рабочей программы за последние 5 лет.
            </div>
            
            <div className="center top text" id="n5_403">6,2 балла</div>
            
            <div className="center top text" id="n5_404">Относительная популярность среди всех программ</div>
        </div>
        
        <div className="center frame" id="n5_606">
            
            <div className="left top text" id="n5_607">Преподаватели</div>
            
            <div className="left_right top_bottom frame" id="n5_1669">
                
                <div className="left_right top_bottom frame" id="n5_1670">
                    
                    <div className="left_right top_bottom rectangle" id="n5_1671"></div>
                </div>
                
                <img
                    src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4545/33a8/a246a4279d7ca1b180367f3d0abc0a9e"
                    width="44" height="52" className="right top_bottom vector" id="n5_1672" />
                    
                    <div className="right frame" id="n5_1673">
                        
                        <img
                            src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a397/3d59/626c730053d896bb86086da4477e4050"
                            width="12" height="7" className="scale vector" id="n5_1674" /></div>
                    
                    <div className="left_right top_bottom text" id="n5_1678">Филимонов Максим Николаевич</div>
            </div>
            
            <div className="center top text" id="n5_1779">Персональный рейтинг</div>
            
            <div className="center top text" id="n5_609">8,0 балла</div>
        </div>
        
        <div className="center frame" id="n5_1770">
            
            <div className="center top text" id="n5_1771">6,2</div>
            
            <div className="center top text" id="n5_1772">8,1</div>
            
            <div className="center top text" id="n5_1773">7,6</div>
            
            <div className="center top text" id="n5_1774">7,2</div>
            
            <div className="center top text" id="n5_1775">Реализованные инновационные проекты</div>
            
            <div className="center top text" id="n5_1776">Опубликованно статей</div>
            
            <div className="center top text" id="n5_1777">Рейтинг цитирования</div>
            
            <div className="center top text" id="n5_1778">Дисперсия оценок</div>
        </div>
        
        <div className="center frame" id="n5_1761">
            
            <div className="center top text" id="n5_1762">64%</div>
            
            <div className="center top text" id="n5_1763">50%</div>
            
            <div className="center top text" id="n5_1764">24%</div>
            
            <div className="center top text" id="n5_1766">Преподавателей практиков</div>
            
            <div className="center top text" id="n5_1767">Преподавателей,<br/>привлекаемых к чтению дисциплин
            </div>
            
            <div className="center top text" id="n5_1768">Преподавателей прошли повышение квалификации или обучение
            </div>
        </div>
        
        <div className="center frame" id="n5_1733">
            
            <div className="frame" id="n5_1682">
                
                <div className="scale rectangle" id="n5_1679"></div>
                
                <div className="scale rectangle" id="n5_1680"></div>
                
                <div className="center top text" id="n5_608">Восприимчив и открыт для новых идей</div>
                
                <div className="center top text" id="n5_1681">9.1</div>
            </div>
            
            <div className="frame" id="n5_1683">
                
                <div className="scale rectangle" id="n5_1684"></div>
                
                <div className="scale rectangle" id="n5_1685"></div>
                
                <div className="center top text" id="n5_1686">Объединяет теорию и практику</div>
                
                <div className="center top text" id="n5_1687">8.3</div>
            </div>
            
            <div className="frame" id="n5_1688">
                
                <div className="scale rectangle" id="n5_1689"></div>
                
                <div className="scale rectangle" id="n5_1690"></div>
                
                <div className="center top text" id="n5_1691">Обладает передовыми знаниями своего предмета</div>
                
                <div className="center top text" id="n5_1692">7.4</div>
            </div>
            
            <div className="frame" id="n5_1693">
                
                <div className="scale rectangle" id="n5_1694"></div>
                
                <div className="scale rectangle" id="n5_1695"></div>
                
                <div className="center top text" id="n5_1696">Использует полезные примеры для объяснений</div>
                
                <div className="center top text" id="n5_1697">8.1</div>
            </div>
            
            <div className="frame" id="n5_1698">
                
                <div className="scale rectangle" id="n5_1699"></div>
                
                <div className="scale rectangle" id="n5_1700"></div>
                
                <div className="center top text" id="n5_1701">Воодушевляет изучать свой предмет</div>
                
                <div className="center top text" id="n5_1702">6.9</div>
            </div>
            
            <div className="frame" id="n5_1708">
                
                <div className="scale rectangle" id="n5_1709"></div>
                
                <div className="scale rectangle" id="n5_1710"></div>
                
                <div className="center top text" id="n5_1711">Уважительно относится ко всем своим студентам</div>
                
                <div className="center top text" id="n5_1712">8.2</div>
            </div>
            
            <div className="frame" id="n5_1703">
                
                <div className="scale rectangle" id="n5_1704"></div>
                
                <div className="scale rectangle" id="n5_1705"></div>
                
                <div className="center top text" id="n5_1706">В курсе событий по предмету, который преподает</div>
                
                <div className="center top text" id="n5_1707">7.1</div>
            </div>
            
            <div className="frame" id="n5_1713">
                
                <div className="scale rectangle" id="n5_1714"></div>
                
                <div className="scale rectangle" id="n5_1715"></div>
                
                <div className="center top text" id="n5_1716">Внимателен к культурным различиям</div>
                
                <div className="center top text" id="n5_1717">8.0</div>
            </div>
            
            <div className="frame" id="n5_1723">
                
                <div className="scale rectangle" id="n5_1724"></div>
                
                <div className="scale rectangle" id="n5_1725"></div>
                
                <div className="center top text" id="n5_1726">Объясняет в ясной и легко понятной форме</div>
                
                <div className="center top text" id="n5_1727">7.3</div>
            </div>
            
            <div className="frame" id="n5_1718">
                
                <div className="scale rectangle" id="n5_1719"></div>
                
                <div className="scale rectangle" id="n5_1720"></div>
                
                <div className="center top text" id="n5_1721">Он - эксперт в своем предмете</div>
                
                <div className="center top text" id="n5_1722">8.4</div>
            </div>
            
            <div className="frame" id="n5_1728">
                
                <div className="scale rectangle" id="n5_1729"></div>
                
                <div className="scale rectangle" id="n5_1730"></div>
                
                <div className="center top text" id="n5_1731">Способствует участию студентов</div>
                
                <div className="center top text" id="n5_1732">7.0</div>
            </div>
        </div>
        
        <div className="center frame" id="n5_1901">
            
            <div className="left top text" id="n5_1902">Результативность студентов</div>
            
            <div className="center top text" id="n5_1904">8,4 балла</div>
        </div>
        
        <div className="center frame" id="n5_2628">
            
            <div className="left top text" id="n5_2629">Капитализация выпускников</div>
            
            <div className="center top text" id="n5_2630">6,7 балла</div>
        </div>
        
        <div className="center frame" id="n5_1908">
            
            <div className="center top text" id="n5_1909">57%</div>
            
            <div className="center top text" id="n5_1910">29%</div>
            
            <div className="center top text" id="n5_1911">87%</div>
            
            <div className="center top text" id="n5_1913">Студентов закончили программу</div>
            
            <div className="center top text" id="n5_1914">Работают на конец обучения</div>
            
            <div className="center top text" id="n5_1915">Посещение дисциплин</div>
        </div>
        
        <div className="center frame" id="n5_2638">
            
            <div className="center top text" id="n5_2639">0,34</div>
            
            <div className="center top text" id="n5_2640">61%</div>
            
            <div className="center top text" id="n5_2641">1.12</div>
            
            <div className="center top text" id="n5_2643">Соотношение количества вакансий к резюме</div>
            
            <div className="center top text" id="n5_2644">Выпускников, трудоустроенны в ведущих компаниях в течении года
                после обучения
            </div>
            
            <div className="center top text" id="n5_2645">Отношение средней з/п выпускника первый год после выпуска к
                средней по региону
            </div>
        </div>
        
        <div className="center frame" id="n5_2647">
            
            <div className="center frame" id="n5_2649">
                
                <div className="component left top instance" id="n5_2650">
                    
                    <div className="left_right bottom rectangle" id="nI5_2650-5_185"></div>
                    
                    <div className="frame" id="nI5_2650-5_186">
                        
                        <div className="left top text" id="nI5_2650-5_187">Плис</div>
                    </div>
                    
                    <div className="frame" id="nI5_2650-5_207"></div>
                    
                    <div className="frame" id="nI5_2650-5_202">
                        
                        <div className="left top text" id="nI5_2650-5_203">Плис</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_2651">
                    
                    <div className="left_right bottom rectangle" id="nI5_2651-5_185"></div>
                    
                    <div className="frame" id="nI5_2651-5_186">
                        
                        <div className="left top text" id="nI5_2651-5_187">Ассемблер</div>
                    </div>
                    
                    <div className="frame" id="nI5_2651-5_207"></div>
                    
                    <div className="frame" id="nI5_2651-5_202">
                        
                        <div className="left top text" id="nI5_2651-5_203">Ассемблер</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_2652">
                    
                    <div className="left_right bottom rectangle" id="nI5_2652-5_185"></div>
                    
                    <div className="frame" id="nI5_2652-5_186">
                        
                        <div className="left top text" id="nI5_2652-5_187">Автоматика</div>
                    </div>
                    
                    <div className="frame" id="nI5_2652-5_207"></div>
                    
                    <div className="frame" id="nI5_2652-5_202">
                        
                        <div className="left top text" id="nI5_2652-5_203">Автоматика</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_2693">
                    
                    <div className="left_right bottom rectangle" id="nI5_2693-5_185"></div>
                    
                    <div className="frame" id="nI5_2693-5_186">
                        
                        <div className="left top text" id="nI5_2693-5_187">Алгоритмы</div>
                    </div>
                    
                    <div className="frame" id="nI5_2693-5_207"></div>
                    
                    <div className="frame" id="nI5_2693-5_202">
                        
                        <div className="left top text" id="nI5_2693-5_203">Алгоритмы</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_2694">
                    
                    <div className="left_right bottom rectangle" id="nI5_2694-5_185"></div>
                    
                    <div className="frame" id="nI5_2694-5_186">
                        
                        <div className="left top text" id="nI5_2694-5_187">Исполнительные устройства</div>
                    </div>
                    
                    <div className="frame" id="nI5_2694-5_207"></div>
                    
                    <div className="frame" id="nI5_2694-5_202">
                        
                        <div className="left top text" id="nI5_2694-5_203">Исполнительные устройства</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_2695">
                    
                    <div className="left_right bottom rectangle" id="nI5_2695-5_185"></div>
                    
                    <div className="frame" id="nI5_2695-5_186">
                        
                        <div className="left top text" id="nI5_2695-5_187">Техническая эксплуатация</div>
                    </div>
                    
                    <div className="frame" id="nI5_2695-5_207"></div>
                    
                    <div className="frame" id="nI5_2695-5_202">
                        
                        <div className="left top text" id="nI5_2695-5_203">системы ЧПУ</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_2720">
                    
                    <div className="left_right bottom rectangle" id="nI5_2720-5_185"></div>
                    
                    <div className="frame" id="nI5_2720-5_186">
                        
                        <div className="left top text" id="nI5_2720-5_187">Электротехника</div>
                    </div>
                    
                    <div className="frame" id="nI5_2720-5_207"></div>
                    
                    <div className="frame" id="nI5_2720-5_202">
                        
                        <div className="left top text" id="nI5_2720-5_203">Mathcad</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_2721">
                    
                    <div className="left_right bottom rectangle" id="nI5_2721-5_185"></div>
                    
                    <div className="frame" id="nI5_2721-5_186">
                        
                        <div className="left top text" id="nI5_2721-5_187">C/C++</div>
                    </div>
                    
                    <div className="frame" id="nI5_2721-5_207"></div>
                    
                    <div className="frame" id="nI5_2721-5_202">
                        
                        <div className="left top text" id="nI5_2721-5_203">Компас-3D</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_2722">
                    
                    <div className="left_right bottom rectangle" id="nI5_2722-5_185"></div>
                    
                    <div className="frame" id="nI5_2722-5_186">
                        
                        <div className="left top text" id="nI5_2722-5_187">Ведение документации</div>
                    </div>
                    
                    <div className="frame" id="nI5_2722-5_207"></div>
                    
                    <div className="frame" id="nI5_2722-5_202">
                        
                        <div className="left top text" id="nI5_2722-5_203">Монтаж оборудования</div>
                    </div>
                </div>
            </div>
            
            <div className="center frame" id="n5_2653">
                
                <div className="scale frame" id="n5_2654">
                    
                    <div className="left top text" id="n5_2658">Ключевые навыки выпускника</div>
                </div>
                
                <div className="scale text" id="n5_2662">Требуемые навыки на рынке труда</div>
                
                <div className="scale frame" id="n5_2665">
                    
                    <div className="left_right center rectangle" id="n5_2666"></div>
                </div>
            </div>
        </div>
        
        <div className="center frame" id="n5_1984">
            
            <div className="center top text" id="n5_1985">89%</div>
            
            <div className="center top text" id="n5_1986">74%</div>
            
            <div className="center top text" id="n5_1988">В ходе прохождения дисциплины</div>
            
            <div className="center top text" id="n5_1989">После прохождения дисциплины</div>
        </div>
        
        <div className="center frame" id="n5_2397">
            
            <div className="frame" id="n5_2551">
                
                <div className="left_right bottom rectangle" id="n5_2553"></div>
                
                <div className="frame" id="n5_2558">
                    
                    <div className="left top text" id="n5_2559">Для расширения кругозора и разностороннего развитя</div>
                    
                    <div className="frame" id="n5_2556">
                        
                        <div className="left top text" id="n5_2557">✓</div>
                    </div>
                </div>
            </div>
            
            <div className="frame" id="n5_2560">
                
                <div className="left_right bottom rectangle" id="n5_2562"></div>
                
                <div className="frame" id="n5_2565">
                    
                    <div className="left top text" id="n5_2566">Для будущей карьеры</div>
                    
                    <div className="frame" id="n5_2567">
                        
                        <div className="left top text" id="n5_2568">✓</div>
                    </div>
                </div>
            </div>
            
            <div className="frame" id="n5_2569">
                
                <div className="left_right bottom rectangle" id="n5_2571"></div>
                
                <div className="frame" id="n5_2574">
                    
                    <div className="left top text" id="n5_2575">По новизне полученных знаний</div>
                    
                    <div className="frame" id="n5_2576"></div>
                </div>
            </div>
            
            <div className="frame" id="n5_2578">
                
                <div className="left_right bottom rectangle" id="n5_2580"></div>
                
                <div className="frame" id="n5_2583">
                    
                    <div className="left top text" id="n5_2584">Сложность дисциплины</div>
                    
                    <div className="frame" id="n5_2585">
                        
                        <div className="left top text" id="n5_2586">✓</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="center frame" id="n5_2587">
            
            <div className="frame" id="n5_2588">
                
                <div className="left_right bottom rectangle" id="n5_2590"></div>
                
                <div className="frame" id="n5_2593">
                    
                    <div className="left top text" id="n5_2594">Ясность требований, предъявляемых к студентам</div>
                    
                    <div className="frame" id="n5_2595"></div>
                </div>
            </div>
            
            <div className="frame" id="n5_2597">
                
                <div className="left_right bottom rectangle" id="n5_2599"></div>
                
                <div className="frame" id="n5_2602">
                    
                    <div className="left top text" id="n5_2603">Ясность и последовательность изложения материалов</div>
                    
                    <div className="frame" id="n5_2604">
                        
                        <div className="left top text" id="n5_2605">✓</div>
                    </div>
                </div>
            </div>
            
            <div className="frame" id="n5_2606">
                
                <div className="left_right bottom rectangle" id="n5_2608"></div>
                
                <div className="frame" id="n5_2611">
                    
                    <div className="left top text" id="n5_2612">Контакт преподавателя с аудиторией</div>
                    
                    <div className="frame" id="n5_2613"></div>
                </div>
            </div>
            
            <div className="frame" id="n5_2615">
                
                <div className="left_right bottom rectangle" id="n5_2617"></div>
                
                <div className="frame" id="n5_2620">
                    
                    <div className="left top text" id="n5_2621">Возможность внеаудиторного общения по учебным и научным
                        вопросам
                    </div>
                    
                    <div className="frame" id="n5_2622">
                        
                        <div className="left top text" id="n5_2623">✓</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="center frame" id="n5_1917">
            
            <div className="left_right top_bottom frame" id="n5_1918">
                
                <div className="left_right top_bottom rectangle" id="n5_1919"></div>
            </div>
            
            <img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4545/33a8/a246a4279d7ca1b180367f3d0abc0a9e"
                 width="44" height="52" className="right top_bottom vector" id="n5_1920" />
                
                <div className="right frame" id="n5_1921">
                    
                    <img
                        src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a397/3d59/626c730053d896bb86086da4477e4050"
                        width="12" height="7" className="scale vector" id="n5_1922" /></div>
                
                <div className="left_right top_bottom text" id="n5_1926">Информационные системы управления</div>
        </div>
        
        <div className="center top text" id="n5_2548">Степень освоения материала</div>
        
        <div className="center top text" id="n5_2549">Полезность непосредственно пройденной дисциплины</div>
        
        <div className="center top text" id="n5_2624">Оценка преподавания дисциплины</div>
        
        <div className="center frame" id="n5_604">
            
            <div className="center top text" id="n5_405">Данный анализ показывает частоту упоминаний дисциплин из
                рабочей программы в 1ом квартиле статей журнала Scopus за последние 2 года и общий показатель
                популярности среди всех дисциплин во всех рабочих программах
            </div>
            
            <div className="center frame" id="n5_93">
                
                <div className="left top component" id="n5_209">
                    
                    <div className="left_right bottom rectangle" id="n5_185"></div>
                    
                    <div className="frame" id="n5_186">
                        
                        <div className="left top text" id="n5_187">19.1</div>
                    </div>
                    
                    <div className="frame" id="n5_207">
                        
                        <div className="left top text" id="n5_208">15%</div>
                    </div>
                    
                    <div className="frame" id="n5_202">
                        
                        <div className="left top text" id="n5_203">Дискретная математика</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_219">
                    
                    <div className="left_right bottom rectangle" id="nI5_219-5_185"></div>
                    
                    <div className="frame" id="nI5_219-5_186">
                        
                        <div className="left top text" id="nI5_219-5_187">6.4</div>
                    </div>
                    
                    <div className="frame" id="nI5_219-5_207">
                        
                        <div className="left top text" id="nI5_219-5_208">23%</div>
                    </div>
                    
                    <div className="frame" id="nI5_219-5_202">
                        
                        <div className="left top text" id="nI5_219-5_203">Информационные системы управления</div>
                    </div>
                </div>
                
                <div className="component left top instance" id="n5_228">
                    
                    <div className="left_right bottom rectangle" id="nI5_228-5_185"></div>
                    
                    <div className="frame" id="nI5_228-5_186">
                        
                        <div className="left top text" id="nI5_228-5_187">13.2</div>
                    </div>
                    
                    <div className="frame" id="nI5_228-5_207">
                        
                        <div className="left top text" id="nI5_228-5_208">7%</div>
                    </div>
                    
                    <div className="frame" id="nI5_228-5_202">
                        
                        <div className="left top text" id="nI5_228-5_203">Методы оптимизации<br/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="center frame" id="n5_97">
                
                <div className="scale frame" id="n5_98">
                    
                    <div className="left top text" id="n5_108">Тема дисциплины</div>
                </div>
                
                <div className="scale text" id="n5_114">Упоминания в Scopus</div>
                
                <div className="scale text" id="n5_116">Пополярность</div>
                
                <div className="scale text" id="n5_409">Min 2,2</div>
                
                <div className="scale text" id="n5_410">Мax 39,8</div>
                
                <div className="scale frame" id="n5_117">
                    
                    <div className="left_right center rectangle" id="n5_119"></div>
                </div>
            </div>
            
            <div className="scale text" id="n5_411">За 2 года</div>
            
            <div className="center top text" id="n5_406">Популярность дисциплин рабочей программы</div>
        </div>
        
        <div className="center frame" id="n5_600">
            
            <div className="center top text" id="n4_660">6,2</div>
            
            <div className="center top text" id="n4_664">8,1</div>
            
            <div className="center top text" id="n4_666">7,6</div>
            
            <div className="center top text" id="n4_668">7,2</div>
            
            <div className="center top text" id="n4_661">Соответствие рабочих программ современным трендам</div>
            
            <div className="center top text" id="n4_665">Средняя оценка преподавателей от студентов</div>
            
            <div className="center top text" id="n4_667">Результативность студентов на данной программе</div>
            
            <div className="center top text" id="n4_669">Востребованность выпускников на рынке труда</div>
        </div>
        
        <div className="center frame" id="n5_601">
            
            <div className="left top text" id="n4_675">Инсайты</div>
            
            <div className="center top text" id="n5_24">Обновите содержание образовательных программ</div>
            
            <div className="center top text" id="n5_28">Низкая востребованность студентов на рынке труда</div>
            
            <div className="center top text" id="n5_25">На данный момент 31,1% ключевых тем в образовательной программе
                не соответствует трендам на рынке труда. Попробуй добавить актуальные темы и исключите невостребованные
                темы из &nbsp;состава программы.
            </div>
            
            <div className="center top text" id="n5_29">Стоит актуализировать образовательную программу за счет более
                глубокой концентрации знаний в узком диапазоне или добавить дополнительные темы для легкой адаптации
                выпускника к новым требованиям на рынке труда.
            </div>
            
            <div className="center top rectangle" id="n4_674"></div>
            
            <img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea2a/f58a/73c20d47811a76c1a15303a3f4232804"
                 width="56" height="56" className="center top vector" id="n5_1"/>
                
                <img
                    src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afb2/2894/e6371adaa297bada527aa1a6d803d208"
                    width="68" height="64" className="left top boolean_operation" id="n5_16"/></div>
        
        <div className="center top rectangle" id="n5_2749"></div>
        
        <div className="center top text" id="n5_2750">W</div>
        
        <div className="center text"
             id="n5_2753">2018-2019 Программируемые логические контроллеры
        </div>
        
        <div className="center top text" id="n5_2754">316 кб <button style={{float: "right"}}>Скачать</button></div>
        
        <div className="center frame" id="n4_645">
            
            <div className="left top text" id="n4_637" onClick={() => scrollPoint(0)}>Общая оценка</div>
            
            <div className="left top text" id="n4_649" onClick={() => scrollPoint(1)}>Инсайты</div>
            
            <div className="left top text" id="n4_671" onClick={() => scrollPoint(2)}>Актуальность рабочей программы</div>
            
            <div className="left top text" id="n4_639" onClick={() => scrollPoint(3)}>Преподаватели</div>
            
            <div className="left top text" id="n4_641" onClick={() => scrollPoint(4)}>Результативность студентов</div>
            
            <div className="left top text" id="n4_640" onClick={() => scrollPoint(5)}>Капитализация выпускников</div>
            
            <div className="left top text" id="n4_638" onClick={() => scrollPoint(6)}>Описание программы</div>
            
            <div className="left top text" id="n4_644" onClick={() => scrollPoint(6)}>Документы</div>
        </div>
        
        <div className="center top rectangle" id="n5_1662"></div>
        
        <div className="center frame" id="n4_321">
            
            <div className="right top rectangle" id="n4_322"></div>
            
            <div className="group" id="n4_323">
                
                <div className="left top text" id="n4_324">ДГТУ</div>
                
                <div className="left top text" id="n4_325">/</div>
                
                <div className="left top text" id="n4_326">Программы</div>
            </div>
        </div>
        
        <div className="center frame" id="n4_304">
            
            <div className="frame" id="n4_319">
                
                <div className="left top text" id="n4_320">Программируемые логические контроллеры</div>
            </div>
            
            <div className="frame" id="n4_627">
                
                <div className="left top text" id="n4_624"><Link to={"/programs/old"}>Назад</Link></div>
                
                <div className="component left top instance" id="n4_625">
                    
                    <img
                        src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3680/56b1/3643f8fa9d14f04c675bf62f74dd9ae5"
                        width="11" height="19" className="scale vector" id="nI4_625-4_620" /></div>
            </div>
        </div>
    </div>
}