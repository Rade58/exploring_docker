# CREATING DOCKER IMAGES

RANIJE SAM KORISTIO IMAGE-OVE KOJE SU NAPRAVILI DRUGI INZENJERI

TI IMAGE-OVI SU BILI: `hello-world` `busybox` `redis`

SADA CU DA POKUSAM DA FIGURE-UJEM OUT KAKO DA BUILD-UJEM MY OWN CUSTOM IMAGES; **KAKO BI MOGAO DA RUN-UJEM MY OWN APPLICATIONS INSIDE MY PERSONALIZED CONTAINERS**

PROCES JE STRAIGHTFORWARD, SMAO TREBA DA NAUCIM NESTO SINTAKSE

**JA CU KREIRATI NESTO STO SE ZOVE `Dockerfile`**

TO JE USTVARI CONFIGURATION FILE, KOJI TREBA DA DEFINISE KAKO CE SE PONASATI NAS CONTAINER

ODNOSNO, TO CE SE ODLUCITI KOJE CE SPECIFIC PROGRAME CONTAIN-OVATI, I STA CE RADITI KADA BUDE STARTS UP-OVAN KAO CONTAINER

# KADA NAPRAVOMO DOCKER FILE, PASS-OVCEMOO GA DO DOCKER CLIENT-A

AKO SE SECAS TO JE DOCKER CLI, KOJI SI KORISTIO U TERMINALU

# ONDA CE DOCKER CLIENT PROVIDE-OVATI TAJ FILE DO DOCKER SERVER-A

SERVER RADI HEAVY LIFTING FOR US

# DOCKER SERVER CE UZETI DOCKER FILE, PREGLEDATI SVE LINES OF CODE OF THE CONFIGURATION WE ARE HAVING INSIDE DOCKERFILE I NAPRAVICE USABLE IMAGE

TAJ IMAGE SE ONDA MOZE KORISTITI DA BI SE STARTUP-OVAO CONTAINER

# U DOCKER FILE CE SEDETI SAV COMPLEXITY

NECE BITI WORST THING IN A WORLD

MORACES SAMO DA NAUCIS COUPLE OF COMMANDS

# RADICES ISTE STEP-OVE MAJORITY OF TIMES

1. SPECIFICIRACES BASE IMAGE (SAZNACES STA TO ZNACI)
2. DODAVANJE ADDITIONAL KONFIGURACIJE ZA RUNNING KOMANDI ZA INSTALIRANJE ADDITIONAL PROGRAMA (MRE DEPENDANCIES PROGRAMS AND SOFTWARES THAT WE NEED TO SUCCESSFULLY CREATE AND EXECUTE OUR CONTAINER)
3. I KONACNO CEMO SPECIFICIRATI STARTUP KOMANDU (KOMANAA KOJA CE SLUZITI ESSENCIALLY ZA BOOTUP I START OF THE CONTAINER) (ONA KOMANDA O KOJOJ SMO STALNO PRICALI)