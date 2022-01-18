
# TODO

- Collect: use yesterday's data (at same hour) for missing values instead of interpolation
- Collect: handle DST (missing or added) hours gracefully (dont' interpolate spring DST switch)


# Electricity Data

Data downloaded from 
https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=true&viewType=GRAPH&areaType=BZN&atch=false&dateTime.dateTime=01.07.2021+00:00|CET|DAY&biddingZone.values=CTY|10YSI-ELES-----O!BZN|10YSI-ELES-----O&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2)#

- account peter.kese@gmail.com
- pwd in Firefox

# Weather data

https://rp5.ru/Weather_archive_in_Ljubljana,_Brnik_(airport),_METAR


# DST TIMES:

Electricity data
- 28.03.2021 @ 02:00 - 03:00 -> empty row
- 25.10.2020 @ 02:00 - 03:00 -> two rows with same hour

Weather data:
- 28.03.2021 @ 02:00 - 03:00 -> ??
- 25.10.2020 @ 02:00 - 03:00 -> ??

Sun angle calculation:
https://gml.noaa.gov/grad/solcalc/solareqns.PDF


Summer hollidays
Student hollidays

Other holidays:

1.1
2.1 ?
8.2
27.4
1.5
2.5
25.6
1.11
25.12
26.12

## docs

Potencial sonca  
https://www.podnebnapot2050.si/wp-content/uploads/2020/06/Deliverable_C_1_1-Part-5B-Potencial-son%C4%8Dnih-elektrarn-na-strehah-objektov-v-Sloveniji.pdf

Potencial vetra  
http://www.energetika-portal.si/fileadmin/dokumenti/publikacije/an_ove/posodobitev_2017/strokovne_podlage_ve-comb.pdf


#### NEK ekonomika (cena proizvedene energije 33,5€ / MWh)
Ob varnem in stabilnem delovanju elektrarne
smo družbenikoma dobavili 6.040.821 megavatnih ur električne
energije. Tako smo drugič v zgodovini obratovanja presegli 6.000.000
megavatnih ur in s tem letni načrt dobav za 85.821 megavatnih
ur električne energije. Ob tem smo ustvarili 201.097.970 evrov
prihodkov in 200.963.253 evrov odhodkov, za razliko 134.717 evrov pa
izkazujemo obveznost za davek od dobička

Cost of nuclear  
https://www.sciencedirect.com/science/article/pii/S0301421516300106

CO2 emission factors per fuel type  
https://ourworldindata.org/grapher/carbon-dioxide-emissions-factor


#### ČHE

https://www.seng.si/hidroelektrarne/crpalne-hidroelektrarne/2017060910104485

Avče:
- Volumen: 2,17 mio m3
- Padec: 521 m 
- Moč: 185 MW pri pretoku 40 m3/s
- Kapaciteta: 15h * 185MW = 2,775 GWh
- Cena: 122 M€ (45€ / kWh)

Kozjak:
- Volumen: 2,9 mio m3
- Padec: 700 m // http://mvd20.com/LETO2006/R7.pdf
- Kapaciteta: Avče / 521 * 700 / 2.71 * 2.9 = 4,85 (optimistično)
