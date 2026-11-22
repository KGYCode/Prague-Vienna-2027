/* Public itinerary and booking status. Keep private booking details out of this file. */
window.TRIP_DATA = {
  "title": "Prague & Vienna 2027",
  "dates": "Jan 1–8, 2027",
  "subtitle": "Prague IN → Vienna OUT · 7박 8일",
  "days": [
    {
      "date": "01.01",
      "weekday": "금요일",
      "area": "Prague",
      "headline": "프라하 도착과 구시가지 야경",
      "caption": "16:40 도착. 호텔 도착 시각에 맞춰 구시가지 또는 레트나 중 하나를 선택.",
      "overnight": "Mama Shelter Prague",
      "accent": "#77d7cf",
      "hero": "https://commons.wikimedia.org/wiki/Special:FilePath/Old_Town_Square_in_Prague.jpg?width=1200",
      "heroCredit": "https://commons.wikimedia.org/wiki/File:Old_Town_Square_in_Prague.jpg",
      "highlight": "Prague",
      "stops": [
        {
          "time": "출발 전",
          "name": "London Stansted Airport STN",
          "type": "교통",
          "desc": "공항 버스 예약 필요. 탑승 시간은 항공편에 맞춰 다시 확인.",
          "mode": null,
          "minutes": null,
          "mapQuery": "London Stansted Airport STN"
        },
        {
          "time": "13:45 → 16:40",
          "name": "Václav Havel Airport Prague PRG",
          "type": "항공",
          "desc": "Ryanair FR1428 · 런던 스탠스테드 STN → 프라하 PRG · 직항 예약 확정",
          "mapQuery": "Václav Havel Airport Prague PRG",
          "mode": "flight",
          "minutes": "약 1시간 55분",
          "url": "https://www.prg.aero/en",
          "image": null
        },
        {
          "time": "17:00–18:00 목표",
          "name": "Mama Shelter Prague",
          "type": "숙소",
          "desc": "Uber 또는 대중교통으로 호텔 이동. 입국·짐 수령에 따라 도착 시간 조정.",
          "mapQuery": "Mama Shelter Prague",
          "mode": "transit",
          "minutes": "약 45–65분",
          "url": "https://mamashelter.com/prague/",
          "image": null
        },
        {
          "time": "18:00 이후 · A안",
          "name": "Old Town Square Prague",
          "type": "관광",
          "desc": "구시가지 크리스마스 마켓과 야경.",
          "mapQuery": "Old Town Square Prague",
          "mode": "walk",
          "minutes": "시트 기준 약 50분",
          "url": "https://prague.eu/en/christmas-markets/",
          "image": {
            "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Old_Town_Square_in_Prague.jpg?width=1200",
            "credit": "https://commons.wikimedia.org/wiki/File:Old_Town_Square_in_Prague.jpg"
          }
        },
        {
          "time": "저녁 · A안",
          "name": "Old Town Bridge Tower Prague",
          "type": "관광",
          "desc": "카를교 입구 야경.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Old Town Bridge Tower Prague"
        },
        {
          "time": "저녁 · A안",
          "name": "Kozlovna Apropos Prague",
          "type": "식사",
          "desc": "바 자리 여유가 있으면 저녁.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Kozlovna Apropos Prague"
        },
        {
          "time": "저녁 · B안",
          "name": "Zahrádky Letná Beer Garden Prague",
          "type": "선택",
          "desc": "구시가지 대신 숙소 근처 레트나. 겨울 영업 확인.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Zahrádky Letná Beer Garden Prague"
        },
        {
          "time": "저녁 · B안",
          "name": "Vyhlídka na Letné Prague",
          "type": "선택",
          "desc": "레트나 전망. 도착 시각에 따라 야경 산책.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Vyhlídka na Letné Prague"
        },
        {
          "time": "저녁 · 선택",
          "name": "Cobra Prague Letná",
          "type": "선택",
          "desc": "숙소 근처 바 후보.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Cobra Prague Letná"
        }
      ],
      "modes": [
        "flight",
        "transit",
        "walk",
        "walk",
        "walk",
        "walk",
        "walk",
        "walk"
      ]
    },
    {
      "date": "01.02",
      "weekday": "토요일",
      "area": "Prague",
      "headline": "토요시장과 에스테이트 극장",
      "caption": "시트의 호텔 출발 및 시장 시작 시각이 겹쳐, 극장 11:30을 기준으로 시장 체류시간을 당일 조정.",
      "overnight": "Mama Shelter Prague",
      "accent": "#77d7cf",
      "hero": "https://commons.wikimedia.org/wiki/Special:FilePath/Charles_Bridge_and_Prague_Castle_at_dawn.jpg?width=1200",
      "heroCredit": "https://commons.wikimedia.org/wiki/File:Charles_Bridge_and_Prague_Castle_at_dawn.jpg",
      "highlight": "Prague",
      "stops": [
        {
          "time": "10:00 출발",
          "name": "Mama Shelter Prague",
          "type": "숙소",
          "desc": "",
          "mode": null,
          "minutes": null,
          "mapQuery": "Mama Shelter Prague"
        },
        {
          "time": "오전",
          "name": "Farmers’ Saturday Market Náplavka Prague",
          "type": "관광",
          "desc": "토요시장. 여행 날짜의 실제 운영 여부 확인.",
          "mode": "transit",
          "minutes": "시트 기준 트램 약 17분",
          "mapQuery": "Farmers’ Saturday Market Náplavka Prague"
        },
        {
          "time": "11:30",
          "name": "Estates Theatre Prague",
          "type": "관광",
          "desc": "영어 가이드 투어. 티켓 상태 확인.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Estates Theatre Prague"
        },
        {
          "time": "14:00–15:30",
          "name": "Pork's Vodičkova Prague",
          "type": "식사",
          "desc": "늦은 점심.",
          "mode": "walk",
          "minutes": "시트 기준 27분",
          "mapQuery": "Pork's Vodičkova Prague"
        },
        {
          "time": "식사 후",
          "name": "Café Louvre Prague",
          "type": "카페",
          "desc": "디저트.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Café Louvre Prague"
        },
        {
          "time": "오후",
          "name": "Old Town Square Prague",
          "type": "관광",
          "desc": "구시가지 크리스마스 마켓.",
          "mapQuery": "Old Town Square Prague",
          "mode": "walk",
          "minutes": "시트 기준 9분",
          "url": "https://prague.eu/en/christmas-markets/",
          "image": {
            "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Old_Town_Square_in_Prague.jpg?width=1200",
            "credit": "https://commons.wikimedia.org/wiki/File:Old_Town_Square_in_Prague.jpg"
          }
        },
        {
          "time": "오후",
          "name": "Prague Astronomical Clock",
          "type": "관광",
          "desc": "천문시계.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Prague Astronomical Clock"
        },
        {
          "time": "오후",
          "name": "Powder Tower Prague",
          "type": "관광",
          "desc": "화약탑.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Powder Tower Prague"
        }
      ],
      "modes": [
        "transit",
        "walk",
        "walk",
        "walk",
        "walk",
        "walk",
        "walk"
      ]
    },
    {
      "date": "01.03",
      "weekday": "일요일",
      "area": "Prague",
      "headline": "스트라호프와 페트르진",
      "caption": "양조장에서 점심 후 정원으로 이동. 전망탑과 거울 미로는 날씨와 운영 상황에 따라 선택.",
      "overnight": "Mama Shelter Prague",
      "accent": "#77d7cf",
      "hero": "https://commons.wikimedia.org/wiki/Special:FilePath/View_from_Pet%C5%99%C3%ADn_Lookout_Tower_over_the_river_and_castle%2C_Prague.jpg?width=1200",
      "heroCredit": "https://commons.wikimedia.org/wiki/File:View_from_Pet%C5%99%C3%ADn_Lookout_Tower_over_the_river_and_castle%2C_Prague.jpg",
      "highlight": "Prague",
      "stops": [
        {
          "time": "10:00–10:30",
          "name": "Strahov Monastery Prague",
          "type": "관광",
          "desc": "숙소에서 트램으로 이동해 수도원 외관과 안뜰 방문.",
          "mode": "transit",
          "minutes": "시트 기준 약 25분",
          "mapQuery": "Strahov Monastery Prague"
        },
        {
          "time": "11:00–12:00",
          "name": "Strahov Library Prague",
          "type": "관광",
          "desc": "수도원과 도서관 관람. 티켓 필요.",
          "mapQuery": "Strahov Library Prague",
          "mode": "walk",
          "minutes": "숙소에서 35–45분",
          "url": "https://www.strahovskyklaster.cz/en/for-visitors",
          "image": null
        },
        {
          "time": "12:00–13:30",
          "name": "Strahov Monastery Brewery Prague",
          "type": "식사",
          "desc": "양조장 점심과 맥주.",
          "mapQuery": "Strahov Monastery Brewery Prague",
          "mode": "walk",
          "minutes": "3–5분",
          "url": "https://www.klasterni-pivovar.cz/",
          "image": null
        },
        {
          "time": "14:00–15:00",
          "name": "Petřín Gardens Prague",
          "type": "관광",
          "desc": "양조장에서 13:30 출발 목표. 정원 산책.",
          "mode": "walk",
          "minutes": "시트 기준 약 30분",
          "mapQuery": "Petřín Gardens Prague"
        },
        {
          "time": "날씨 좋으면 · 약 45분",
          "name": "Petřín Lookout Tower Prague",
          "type": "관광",
          "desc": "전망탑을 추가하면 하산과 카페 시간을 조정.",
          "mapQuery": "Petřín Lookout Tower Prague",
          "mode": "walk",
          "minutes": "15–25분",
          "url": null,
          "image": {
            "src": "https://commons.wikimedia.org/wiki/Special:FilePath/View_from_Pet%C5%99%C3%ADn_Lookout_Tower_over_the_river_and_castle%2C_Prague.jpg?width=1200",
            "credit": "https://commons.wikimedia.org/wiki/File:View_from_Pet%C5%99%C3%ADn_Lookout_Tower_over_the_river_and_castle%2C_Prague.jpg"
          }
        },
        {
          "time": "15:00–15:30 · 선택",
          "name": "Mirror Maze in Petrin Park Prague",
          "type": "선택",
          "desc": "거울 미로 후보.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Mirror Maze in Petrin Park Prague"
        },
        {
          "time": "15:30–15:40",
          "name": "Újezd Funicular Station Prague",
          "type": "이동",
          "desc": "Petřín 정상역에서 타고 Újezd 하부역에서 하차.",
          "mapQuery": "Újezd Funicular Station Prague",
          "mode": "funicular",
          "minutes": "시트 기준 10분",
          "url": "https://pid.cz/en/funicular/",
          "image": null
        },
        {
          "time": "15:40–16:40",
          "name": "Angelato Újezd Prague",
          "type": "카페",
          "desc": "젤라또와 휴식.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Angelato Újezd Prague"
        },
        {
          "time": "오전 · 선택",
          "name": "In August Company Prague",
          "type": "선택",
          "desc": "접시 구경 후보. 수도원 출발 일정과 맞을 때만.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "In August Company Prague"
        },
        {
          "time": "하산 후 · 선택",
          "name": "Trdelník & Coffee Prague",
          "type": "선택",
          "desc": "굴뚝빵 후보. 방문 지점은 당일 지도에서 확인.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Trdelník & Coffee Prague"
        }
      ],
      "modes": [
        "walk",
        "walk",
        "walk",
        "walk",
        "walk",
        "funicular",
        "walk",
        "walk",
        "walk"
      ]
    },
    {
      "date": "01.04",
      "weekday": "월요일",
      "area": "Prague",
      "headline": "프라하 국립박물관과 체험 후보",
      "caption": "오전 국립박물관 중심. 점심 및 저녁 체험은 후보.",
      "overnight": "Mama Shelter Prague",
      "accent": "#77d7cf",
      "hero": "https://commons.wikimedia.org/wiki/Special:FilePath/Old_Town_Square_in_Prague.jpg?width=1200",
      "heroCredit": "https://commons.wikimedia.org/wiki/File:Old_Town_Square_in_Prague.jpg",
      "highlight": "Prague",
      "stops": [
        {
          "time": "10:00–13:00",
          "name": "National Museum Prague",
          "type": "박물관",
          "desc": "티켓 구매 필요.",
          "mode": null,
          "minutes": null,
          "mapQuery": "National Museum Prague"
        },
        {
          "time": "박물관 이후 · 선택",
          "name": "Bistró Loreta Prague",
          "type": "식사",
          "desc": "식사 후보. 이동 시간 확인.",
          "mode": "transit",
          "minutes": null,
          "mapQuery": "Bistró Loreta Prague"
        },
        {
          "time": "19:00–20:30 · 선택",
          "name": "Beer Baths Letna Prague",
          "type": "체험",
          "desc": "맥주 스파 후보. Beerland도 비교 중이며 예약 미확인.",
          "mode": "transit",
          "minutes": null,
          "mapQuery": "Beer Baths Letna Prague"
        }
      ],
      "modes": [
        "transit",
        "transit"
      ]
    },
    {
      "date": "01.05",
      "weekday": "화요일",
      "area": "Prague → Vienna",
      "headline": "프라하에서 비엔나로",
      "caption": "시트의 열차 시간은 예약 전 후보. 숙소 입실 기준은 15:00.",
      "overnight": "Limehome Vienna Favoritenstr",
      "accent": "#f0b56e",
      "hero": "https://commons.wikimedia.org/wiki/Special:FilePath/St._Stephen's_Cathedral%2C_Vienna1.jpg?width=1200",
      "heroCredit": "https://commons.wikimedia.org/wiki/File:St._Stephen's_Cathedral%2C_Vienna1.jpg",
      "highlight": "Prague → Vienna",
      "stops": [
        {
          "time": "열차 출발 전",
          "name": "Mama Shelter Prague",
          "type": "숙소",
          "desc": "열차 시간에 맞춰 체크아웃 및 짐 정리.",
          "mapQuery": "Mama Shelter Prague",
          "mode": null,
          "minutes": null,
          "url": "https://mamashelter.com/prague/",
          "image": null
        },
        {
          "time": "09:36 출발 후보",
          "name": "Praha hlavní nádraží",
          "type": "교통",
          "desc": "프라하 중앙역에서 탑승. 열차 승차권 예약 미확인.",
          "mapQuery": "Praha hlavní nádraží",
          "mode": "transit",
          "minutes": "숙소에서 약 20–35분",
          "url": "https://www.oebb.at/en/reiseplanung-services/oebb-zugverbindungen/zugverbindungen-europa/prag",
          "image": null
        },
        {
          "time": "13:49 도착 후보",
          "name": "Wien Hauptbahnhof",
          "type": "교통",
          "desc": "빈 중앙역 도착. 열차 시간은 시트 기준 후보.",
          "mapQuery": "Wien Hauptbahnhof",
          "mode": "train",
          "minutes": "4시간 13분",
          "url": "https://www.oebb.at/en/reiseplanung-services/oebb-zugverbindungen/zugverbindungen-europa/prag",
          "image": null
        },
        {
          "time": "15:00 이후",
          "name": "Limehome Vienna Favoritenstr",
          "type": "숙소",
          "desc": "숙소까지 도보 이동. 시트의 14:30 짐 정리는 조기 입실 가능 여부에 따라 조정.",
          "mapQuery": "Limehome Vienna Favoritenstr",
          "mode": "walk",
          "minutes": "시트 기준 7분",
          "url": "https://www.limehome.com/",
          "image": null
        }
      ],
      "modes": [
        "transit",
        "train",
        "walk"
      ]
    },
    {
      "date": "01.06",
      "weekday": "수요일",
      "area": "Vienna",
      "headline": "레오폴트 미술관과 빈 구시가지",
      "caption": "Café Sperl에서 시작해 MuseumsQuartier, 시청과 슈테판 대성당으로. 공휴일 운영시간 확인.",
      "overnight": "Limehome Vienna Favoritenstr",
      "accent": "#aabdf7",
      "hero": "https://commons.wikimedia.org/wiki/Special:FilePath/Face_Nord_du_Palais_du_Belv%C3%A9d%C3%A8re.jpg?width=1200",
      "heroCredit": "https://commons.wikimedia.org/wiki/File:Face_Nord_du_Palais_du_Belv%C3%A9d%C3%A8re.jpg",
      "highlight": "Vienna",
      "stops": [
        {
          "time": "11:00–12:00",
          "name": "Café Sperl Vienna",
          "type": "식사",
          "desc": "점심. Argentinierstraße를 경유하는 도보 동선.",
          "mode": "walk",
          "minutes": "숙소에서 시트 기준 36분",
          "mapQuery": "Café Sperl Vienna"
        },
        {
          "time": "12:30–15:30",
          "name": "Leopold Museum Vienna",
          "type": "미술관",
          "desc": "티켓 구매 필요.",
          "mode": "walk",
          "minutes": "시트 기준 7분",
          "mapQuery": "Leopold Museum Vienna"
        },
        {
          "time": "15:30–16:00",
          "name": "MuseumsQuartier Fotoautomat Vienna",
          "type": "체험",
          "desc": "포토부스.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "MuseumsQuartier Fotoautomat Vienna"
        },
        {
          "time": "16:15–16:40",
          "name": "Vienna City Hall Rathaus",
          "type": "관광",
          "desc": "시청과 주변 거리.",
          "mode": "walk",
          "minutes": "시트 기준 13분",
          "mapQuery": "Vienna City Hall Rathaus"
        },
        {
          "time": "16:40–17:30",
          "name": "St. Stephen's Cathedral Vienna",
          "type": "관광",
          "desc": "슈테판 대성당 관람. 시청에서 이동하면 실제 도착은 17:05 전후.",
          "mapQuery": "St. Stephen's Cathedral Vienna",
          "mode": "walk",
          "minutes": "시트 기준 25분",
          "url": "https://www.stephanskirche.at/",
          "image": {
            "src": "https://commons.wikimedia.org/wiki/Special:FilePath/St._Stephen's_Cathedral%2C_Vienna1.jpg?width=1200",
            "credit": "https://commons.wikimedia.org/wiki/File:St._Stephen's_Cathedral%2C_Vienna1.jpg"
          }
        },
        {
          "time": "저녁",
          "name": "BEAULIEU Épicerie fine & Bistrot Vienna",
          "type": "식사",
          "desc": "공휴일 영업 확인 후 방문. 아케이드 함께 구경.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "BEAULIEU Épicerie fine & Bistrot Vienna"
        },
        {
          "time": "저녁",
          "name": "Kleines Café Vienna",
          "type": "카페",
          "desc": "현금 준비. 해진 뒤 카페.",
          "mapQuery": "Kleines Café Vienna",
          "mode": "walk",
          "minutes": "5–10분",
          "image": null
        }
      ],
      "modes": [
        "walk",
        "walk",
        "walk",
        "walk",
        "walk",
        "walk"
      ]
    },
    {
      "date": "01.07",
      "weekday": "목요일",
      "area": "Vienna",
      "headline": "미술사 박물관과 호프부르크",
      "caption": "비엔나 소시지로 시작해 미술사 박물관, 왕궁 외관, 카를 성당 순서.",
      "overnight": "Limehome Vienna Favoritenstr",
      "accent": "#aabdf7",
      "hero": "https://commons.wikimedia.org/wiki/Special:FilePath/Kunsthistorisches_Museum_Exterior.JPG?width=1200",
      "heroCredit": "https://commons.wikimedia.org/wiki/File:Kunsthistorisches_Museum_Exterior.JPG",
      "highlight": "Vienna",
      "stops": [
        {
          "time": "11:00–11:30",
          "name": "Bitzinger Würstelstand Albertina Vienna",
          "type": "식사",
          "desc": "비엔나 소시지 핫도그.",
          "mode": "transit",
          "minutes": "숙소에서 시트 기준 트램 24분",
          "mapQuery": "Bitzinger Würstelstand Albertina Vienna"
        },
        {
          "time": "13:30–16:00",
          "name": "Kunsthistorisches Museum Vienna",
          "type": "미술관",
          "desc": "상층부터 관람하고 시간이 되면 박물관 카페 방문.",
          "mapQuery": "Kunsthistorisches Museum Vienna",
          "mode": "walk",
          "minutes": "시트 기준 10분",
          "url": "https://www.khm.at/en/visit",
          "image": {
            "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Kunsthistorisches_Museum_Exterior.JPG?width=1200",
            "credit": "https://commons.wikimedia.org/wiki/File:Kunsthistorisches_Museum_Exterior.JPG"
          }
        },
        {
          "time": "16:00–16:30",
          "name": "Hofburg Heldenplatz Vienna",
          "type": "관광",
          "desc": "호프부르크와 Burggarten 외관 산책.",
          "mode": "walk",
          "minutes": "시트 기준 3분",
          "mapQuery": "Hofburg Heldenplatz Vienna"
        },
        {
          "time": "오후",
          "name": "Gerstner K. u. K. Hofzuckerbäcker Vienna",
          "type": "카페",
          "desc": "근처 카페 후보.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Gerstner K. u. K. Hofzuckerbäcker Vienna"
        },
        {
          "time": "오후",
          "name": "Karlskirche Vienna",
          "type": "관광",
          "desc": "카를 성당.",
          "mapQuery": "Karlskirche Vienna",
          "mode": "walk",
          "minutes": "20–25분",
          "image": null
        },
        {
          "time": "저녁",
          "name": "Wiener Wiazhaus Vienna",
          "type": "식사",
          "desc": "슈니첼·굴라쉬. 시트 기준 전화 예약 필요, 현금 준비.",
          "mode": "walk",
          "minutes": null,
          "mapQuery": "Wiener Wiazhaus Vienna"
        }
      ],
      "modes": [
        "walk",
        "walk",
        "walk",
        "walk",
        "walk"
      ]
    },
    {
      "date": "01.08",
      "weekday": "금요일",
      "area": "Vienna",
      "headline": "피그뮐러 점심과 저녁 출국",
      "caption": "오전에 체크아웃하고 짐 보관. 17:00 숙소에서 짐 회수, 18:00 공항 도착 목표.",
      "overnight": "숙박 없음 · Vienna 출국",
      "accent": "#aabdf7",
      "hero": "https://commons.wikimedia.org/wiki/Special:FilePath/St._Stephen's_Cathedral%2C_Vienna1.jpg?width=1200",
      "heroCredit": "https://commons.wikimedia.org/wiki/File:St._Stephen's_Cathedral%2C_Vienna1.jpg",
      "highlight": "Vienna",
      "stops": [
        {
          "time": "11:00까지",
          "name": "Limehome Vienna Favoritenstr",
          "type": "숙소",
          "desc": "체크아웃. 17:00까지 짐을 보관할 곳 확인.",
          "mapQuery": "Limehome Vienna Favoritenstr",
          "mode": null,
          "minutes": null,
          "url": "https://www.limehome.com/",
          "image": null
        },
        {
          "time": "11:30–12:30",
          "name": "Figlmüller Bäckerstraße Vienna",
          "type": "식사",
          "desc": "시트 기준 예약 완료. 슈니첼 점심.",
          "mode": "transit",
          "minutes": null,
          "mapQuery": "Figlmüller Bäckerstraße Vienna"
        },
        {
          "time": "점심 후",
          "name": "Café Schwarzenberg Vienna",
          "type": "카페",
          "desc": "클래식 커피하우스.",
          "mode": "walk",
          "minutes": "시트 기준 16분",
          "mapQuery": "Café Schwarzenberg Vienna"
        },
        {
          "time": "13:00 이후",
          "name": "Alt & Neu Records Vienna",
          "type": "쇼핑",
          "desc": "레코드숍과 인근 빈티지숍 후보.",
          "mode": "walk",
          "minutes": "시트 기준 21분",
          "mapQuery": "Alt & Neu Records Vienna"
        },
        {
          "time": "17:00까지",
          "name": "Limehome Vienna Favoritenstr",
          "type": "숙소",
          "desc": "짐 회수 후 바로 공항으로 출발.",
          "mode": "transit",
          "minutes": null,
          "mapQuery": "Limehome Vienna Favoritenstr"
        },
        {
          "time": "18:00 도착 목표",
          "name": "Vienna International Airport VIE",
          "type": "교통",
          "desc": "시트의 교통편 예상 22–30분에 역까지 이동과 대기 여유를 추가.",
          "mapQuery": "Vienna International Airport VIE",
          "mode": "transit",
          "minutes": "22–30분 + 역 접근·대기",
          "url": "https://www.viennaairport.com/en/passengers/arrival__parking",
          "image": null
        },
        {
          "time": "20:45 → 22:05",
          "name": "London Stansted Airport STN",
          "type": "항공",
          "desc": "Ryanair FR7348 · 비엔나 VIE → 런던 스탠스테드 STN · 직항 예약 확정",
          "mapQuery": "London Stansted Airport STN",
          "mode": "flight",
          "minutes": "2시간 20분 실제 비행시간",
          "image": null
        }
      ],
      "modes": [
        "transit",
        "walk",
        "walk",
        "transit",
        "transit",
        "flight"
      ]
    }
  ],
  "todos": [
    {
      "id": "flights",
      "group": "확정",
      "label": "Ryanair 두 직항 예약 확인",
      "done": true
    },
    {
      "id": "prague",
      "group": "확정",
      "label": "Mama Shelter Prague · 4박 예약 확인",
      "done": true
    },
    {
      "id": "vienna",
      "group": "확정",
      "label": "Limehome Vienna Favoritenstr · 3박 예약 확인",
      "done": true
    },
    {
      "id": "rail",
      "group": "교통",
      "label": "1/5 열차 09:36 → 13:49 후보 · 승차권과 좌석 예약",
      "done": false
    },
    {
      "id": "airport",
      "group": "교통",
      "label": "PRG → 숙소, 빈 시내 → VIE 이동 확인",
      "done": false
    },
    {
      "id": "bags",
      "group": "교통",
      "label": "양쪽 항공편 수하물 추가 구매 여부와 온라인 체크인 확인",
      "done": false
    },
    {
      "id": "tickets",
      "group": "입장권",
      "label": "에스테이트 극장·스트라호프 도서관·프라하 국립박물관·레오폴트 미술관 티켓 확인",
      "done": false
    },
    {
      "id": "dining",
      "group": "식당",
      "label": "희망 식당 및 공연 예약 · 연휴 영업 재확인",
      "done": false
    },
    {
      "id": "lime",
      "group": "출국 전 준비",
      "label": "Limehome 온라인 체크인 절차와 짐 보관 확인",
      "done": false
    },
    {
      "id": "docs",
      "group": "출국 전 준비",
      "label": "여권·여행서류·탑승권·오프라인 지도 준비",
      "done": false
    },
    {
      "id": "figlmueller",
      "group": "확정",
      "label": "1/8 11:30 Figlmüller Bäckerstraße 예약 완료 · 시트 기준",
      "done": true
    },
    {
      "id": "stansted-bus",
      "group": "교통",
      "label": "1/1 런던 → Stansted 공항 버스 예약 및 탑승 시간 확인",
      "done": false
    }
  ],
  "overviewTimeline": [
    {
      "date": "01.01",
      "place": "Prague",
      "detail": "프라하 도착과 구시가지 야경",
      "color": "#77d7cf"
    },
    {
      "date": "01.02",
      "place": "Prague",
      "detail": "토요시장과 에스테이트 극장",
      "color": "#77d7cf"
    },
    {
      "date": "01.03",
      "place": "Prague",
      "detail": "스트라호프와 페트르진",
      "color": "#77d7cf"
    },
    {
      "date": "01.04",
      "place": "Prague",
      "detail": "프라하 국립박물관과 체험 후보",
      "color": "#77d7cf"
    },
    {
      "date": "01.05",
      "place": "Prague → Vienna",
      "detail": "프라하에서 비엔나로",
      "color": "#f0b56e"
    },
    {
      "date": "01.06",
      "place": "Vienna",
      "detail": "레오폴트 미술관과 빈 구시가지",
      "color": "#aabdf7"
    },
    {
      "date": "01.07",
      "place": "Vienna",
      "detail": "미술사 박물관과 호프부르크",
      "color": "#aabdf7"
    },
    {
      "date": "01.08",
      "place": "Vienna",
      "detail": "피그뮐러 점심과 저녁 출국",
      "color": "#aabdf7"
    }
  ],
  "cards": [
    {
      "label": "항공편 · 확정",
      "title": "Ryanair 직항 2편",
      "lines": [
        "1/1 FR1428 · STN 13:45 → PRG 16:40",
        "1/8 FR7348 · VIE 20:45 → STN 22:05",
        "각 2명 · 현지시각 · 추가 수하물 미확인"
      ]
    },
    {
      "label": "PRAGUE · 확정",
      "title": "Mama Shelter Prague · 4박",
      "lines": [
        "Veletržní 1502/20, 170 00 Praha 7",
        "1/1 15:00부터 → 1/5 12:00까지",
        "객실 1개 · 성인 2명"
      ]
    },
    {
      "label": "VIENNA · 확정",
      "title": "Limehome Vienna Favoritenstr · 3박",
      "lines": [
        "Favoritenstraße 73, 1100 Wien",
        "1/5 15:00부터 → 1/8 11:00까지",
        "객실 1개 · 성인 2명 · 온라인 체크인"
      ]
    },
    {
      "label": "숙박 검산",
      "title": "4박 + 3박 = 7박",
      "lines": [
        "1/1 PRG 도착일에 첫 체크인",
        "1/5 프라하 체크아웃과 빈 체크인 동일",
        "1/8 빈 체크아웃과 VIE 출국 동일 · 공백·중복 없음"
      ]
    },
    {
      "label": "도시 간 이동 · 예약 전",
      "title": "1월 5일 Prague → Vienna",
      "lines": [
        "09:36 프라하 중앙역 → 13:49 빈 중앙역 후보",
        "열차 예약 미확인 · 공식 숙소 입실 15:00부터"
      ],
      "url": "https://www.oebb.at/en/reiseplanung-services/oebb-zugverbindungen/zugverbindungen-europa/prag"
    },
    {
      "label": "준비 현황",
      "title": "항공편 2편 · 숙소 2곳 확정",
      "lines": [
        "항공편·숙소 확정 · 1/8 Figlmüller 예약 완료(시트 기준)",
        "열차·공항버스·입장권 및 공휴일 영업 확인"
      ]
    }
  ],
  "alternatives": [
    "1/1 구시가지 야경 또는 레트나 산책 중 하나를 선택.",
    "1/3 페트르진 전망탑은 날씨가 좋으면, 거울 미로는 시간 여유가 있으면 추가.",
    "1/4 저녁 맥주 스파는 예약 전 후보."
  ]
};
