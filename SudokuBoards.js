var SudokuBoards =[{'00': '', '01': '', '02': '', '03': '', '04': '', '05': '', '06': '2', '07': '', '08': '',
                    '10': '', '11': '8', '12': '', '13': '', '14': '', '15': '7', '16': '', '17': '9', '18': '',
                    '20': '6', '21': '', '22': '2', '23': '', '24': '', '25': '', '26': '5', '27': '', '28': '',
                    '30': '', '31': '7', '32': '', '33': '', '34': '6', '35': '', '36': '', '37': '', '38': '',
                    '40': '', '41': '', '42': '', '43': '9', '44': '', '45': '1', '46': '', '47': '', '48': '',
                    '50': '', '51': '', '52': '', '53': '', '54': '2', '55': '', '56': '', '57': '4', '58': '',
                    '60': '', '61': '', '62': '5', '63': '', '64': '', '65': '', '66': '6', '67': '', '68': '3',
                    '70': '', '71': '9', '72': '', '73': '4', '74': '', '75': '', '76': '', '77': '7', '78': '',
                    '80': '', '81': '', '82': '6', '83': '', '84': '', '85': '', '86': '', '87': '', '88': ''},
                   {'00': '5', '01': '3', '02': '', '03': '', '04': '7', '05': '', '06': '', '07': '', '08': '',
                    '10': '6', '11': '', '12': '', '13': '1', '14': '9', '15': '5', '16': '', '17': '', '18': '',
                    '20': '', '21': '9', '22': '8', '23': '', '24': '', '25': '', '26': '', '27': '6', '28': '',
                    '30': '8', '31': '', '32': '', '33': '', '34': '6', '35': '', '36': '', '37': '', '38': '3',
                    '40': '4', '41': '', '42': '', '43': '8', '44': '', '45': '3', '46': '', '47': '', '48': '1',
                    '50': '7', '51': '', '52': '', '53': '', '54': '2', '55': '', '56': '', '57': '', '58': '6',
                    '60': '', '61': '6', '62': '', '63': '', '64': '', '65': '', '66': '2', '67': '8', '68': '',
                    '70': '', '71': '', '72': '', '73': '4', '74': '1', '75': '9', '76': '', '77': '', '78': '5',
                    '80': '', '81': '', '82': '', '83': '', '84': '8', '85': '', '86': '', '87': '7', '88': '9'},
                   {'00': '9', '01': '5', '02': '7', '03': '6', '04': '1', '05': '3', '06': '2', '07': '8', '08': '4',
                    '10': '4', '11': '8', '12': '3', '13': '2', '14': '5', '15': '7', '16': '1', '17': '9', '18': '6',
                    '20': '6', '21': '1', '22': '2', '23': '8', '24': '4', '25': '9', '26': '5', '27': '3', '28': '7',
                    '30': '1', '31': '7', '32': '8', '33': '3', '34': '6', '35': '4', '36': '9', '37': '5', '38': '2',
                    '40': '5', '41': '2', '42': '4', '43': '9', '44': '7', '45': '1', '46': '3', '47': '6', '48': '8',
                    '50': '3', '51': '6', '52': '9', '53': '5', '54': '2', '55': '8', '56': '7', '57': '4', '58': '1',
                    '60': '8', '61': '4', '62': '5', '63': '7', '64': '9', '65': '2', '66': '6', '67': '1', '68': '3',
                    '70': '2', '71': '9', '72': '1', '73': '4', '74': '3', '75': '6', '76': '8', '77': '7', '78': '5',
                    '80': '7', '81': '3', '82': '6', '83': '1', '84': '8', '85': '5', '86': '4', '87': '2', '88': '9'},
                   {'00': '9', '01': '5', '02': '7', '03': '6', '04': '1', '05': '3', '06': '2', '07': '8', '08': '4',
                    '10': '4', '11': '8', '12': '3', '13': '2', '14': '5', '15': '7', '16': '1', '17': '9', '18': '6',
                    '20': '6', '21': '1', '22': '2', '23': '8', '24': '4', '25': '9', '26': '5', '27': '3', '28': '7',
                    '30': '1', '31': '7', '32': '8', '33': '3', '34': '6', '35': '4', '36': '9', '37': '5', '38': '2',
                    '40': '5', '41': '2', '42': '4', '43': '9', '44': '7', '45': '1', '46': '3', '47': '6', '48': '8',
                    '50': '3', '51': '6', '52': '9', '53': '5', '54': '2', '55': '8', '56': '7', '57': '4', '58': '1',
                    '60': '8', '61': '4', '62': '5', '63': '7', '64': '9', '65': '2', '66': '6', '67': '1', '68': '3',
                    '70': '2', '71': '9', '72': '1', '73': '4', '74': '3', '75': '6', '76': '8', '77': '7', '78': '5',
                    '80': '7', '81': '3', '82': '6', '83': '1', '84': '8', '85': '5', '86': '4', '87': '2', '88': '9'},
                   {'00': '9', '01': '5', '02': '7', '03': '6', '04': '1', '05': '3', '06': '2', '07': '8', '08': '4',
                    '10': '4', '11': '8', '12': '3', '13': '2', '14': '5', '15': '7', '16': '1', '17': '9', '18': '6',
                    '20': '6', '21': '1', '22': '2', '23': '8', '24': '4', '25': '9', '26': '5', '27': '3', '28': '7',
                    '30': '1', '31': '7', '32': '8', '33': '3', '34': '6', '35': '4', '36': '9', '37': '5', '38': '2',
                    '40': '5', '41': '2', '42': '4', '43': '9', '44': '7', '45': '1', '46': '3', '47': '6', '48': '8',
                    '50': '3', '51': '6', '52': '9', '53': '5', '54': '2', '55': '8', '56': '7', '57': '4', '58': '1',
                    '60': '8', '61': '4', '62': '5', '63': '7', '64': '9', '65': '2', '66': '6', '67': '1', '68': '3',
                    '70': '2', '71': '9', '72': '1', '73': '4', '74': '3', '75': '6', '76': '8', '77': '7', '78': '5',
                    '80': '7', '81': '3', '82': '6', '83': '1', '84': '8', '85': '5', '86': '4', '87': '2', '88': '9'},
                   {'00': '9', '01': '5', '02': '7', '03': '6', '04': '1', '05': '3', '06': '2', '07': '8', '08': '4',
                    '10': '4', '11': '8', '12': '3', '13': '2', '14': '5', '15': '7', '16': '1', '17': '9', '18': '6',
                    '20': '6', '21': '1', '22': '2', '23': '8', '24': '4', '25': '9', '26': '5', '27': '3', '28': '7',
                    '30': '1', '31': '7', '32': '8', '33': '3', '34': '6', '35': '4', '36': '9', '37': '5', '38': '2',
                    '40': '5', '41': '2', '42': '4', '43': '9', '44': '7', '45': '1', '46': '3', '47': '6', '48': '8',
                    '50': '3', '51': '6', '52': '9', '53': '5', '54': '2', '55': '8', '56': '7', '57': '4', '58': '1',
                    '60': '8', '61': '4', '62': '5', '63': '7', '64': '9', '65': '2', '66': '6', '67': '1', '68': '3',
                    '70': '2', '71': '9', '72': '1', '73': '4', '74': '3', '75': '6', '76': '8', '77': '7', '78': '5',
                    '80': '7', '81': '3', '82': '6', '83': '1', '84': '8', '85': '5', '86': '4', '87': '2', '88': '9'},
                   {'00': '9', '01': '5', '02': '7', '03': '6', '04': '1', '05': '3', '06': '2', '07': '8', '08': '4',
                    '10': '4', '11': '8', '12': '3', '13': '2', '14': '5', '15': '7', '16': '1', '17': '9', '18': '6',
                    '20': '6', '21': '1', '22': '2', '23': '8', '24': '4', '25': '9', '26': '5', '27': '3', '28': '7',
                    '30': '1', '31': '7', '32': '8', '33': '3', '34': '6', '35': '4', '36': '9', '37': '5', '38': '2',
                    '40': '5', '41': '2', '42': '4', '43': '9', '44': '7', '45': '1', '46': '3', '47': '6', '48': '8',
                    '50': '3', '51': '6', '52': '9', '53': '5', '54': '2', '55': '8', '56': '7', '57': '4', '58': '1',
                    '60': '8', '61': '4', '62': '5', '63': '7', '64': '9', '65': '2', '66': '6', '67': '1', '68': '3',
                    '70': '2', '71': '9', '72': '1', '73': '4', '74': '3', '75': '6', '76': '8', '77': '7', '78': '5',
                    '80': '7', '81': '3', '82': '6', '83': '1', '84': '8', '85': '5', '86': '4', '87': '2', '88': '9'},
                   {'00': '9', '01': '5', '02': '7', '03': '6', '04': '1', '05': '3', '06': '2', '07': '8', '08': '4',
                    '10': '4', '11': '8', '12': '3', '13': '2', '14': '5', '15': '7', '16': '1', '17': '9', '18': '6',
                    '20': '6', '21': '1', '22': '2', '23': '8', '24': '4', '25': '9', '26': '5', '27': '3', '28': '7',
                    '30': '1', '31': '7', '32': '8', '33': '3', '34': '6', '35': '4', '36': '9', '37': '5', '38': '2',
                    '40': '5', '41': '2', '42': '4', '43': '9', '44': '7', '45': '1', '46': '3', '47': '6', '48': '8',
                    '50': '3', '51': '6', '52': '9', '53': '5', '54': '2', '55': '8', '56': '7', '57': '4', '58': '1',
                    '60': '8', '61': '4', '62': '5', '63': '7', '64': '9', '65': '2', '66': '6', '67': '1', '68': '3',
                    '70': '2', '71': '9', '72': '1', '73': '4', '74': '3', '75': '6', '76': '8', '77': '7', '78': '5',
                    '80': '7', '81': '3', '82': '6', '83': '1', '84': '8', '85': '5', '86': '4', '87': '2', '88': '9'},
                   {'00': '9', '01': '5', '02': '7', '03': '6', '04': '1', '05': '3', '06': '2', '07': '8', '08': '4',
                    '10': '4', '11': '8', '12': '3', '13': '2', '14': '5', '15': '7', '16': '1', '17': '9', '18': '6',
                    '20': '6', '21': '1', '22': '2', '23': '8', '24': '4', '25': '9', '26': '5', '27': '3', '28': '7',
                    '30': '1', '31': '7', '32': '8', '33': '3', '34': '6', '35': '4', '36': '9', '37': '5', '38': '2',
                    '40': '5', '41': '2', '42': '4', '43': '9', '44': '7', '45': '1', '46': '3', '47': '6', '48': '8',
                    '50': '3', '51': '6', '52': '9', '53': '5', '54': '2', '55': '8', '56': '7', '57': '4', '58': '1',
                    '60': '8', '61': '4', '62': '5', '63': '7', '64': '9', '65': '2', '66': '6', '67': '1', '68': '3',
                    '70': '2', '71': '9', '72': '1', '73': '4', '74': '3', '75': '6', '76': '8', '77': '7', '78': '5',
                    '80': '7', '81': '3', '82': '6', '83': '1', '84': '8', '85': '5', '86': '4', '87': '2', '88': '9'},
                   {'00': '9', '01': '5', '02': '7', '03': '6', '04': '1', '05': '3', '06': '2', '07': '8', '08': '4',
                    '10': '4', '11': '8', '12': '3', '13': '2', '14': '5', '15': '7', '16': '1', '17': '9', '18': '6',
                    '20': '6', '21': '1', '22': '2', '23': '8', '24': '4', '25': '9', '26': '5', '27': '3', '28': '7',
                    '30': '1', '31': '7', '32': '8', '33': '3', '34': '6', '35': '4', '36': '9', '37': '5', '38': '2',
                    '40': '5', '41': '2', '42': '4', '43': '9', '44': '7', '45': '1', '46': '3', '47': '6', '48': '8',
                    '50': '3', '51': '6', '52': '9', '53': '5', '54': '2', '55': '8', '56': '7', '57': '4', '58': '1',
                    '60': '8', '61': '4', '62': '5', '63': '7', '64': '9', '65': '2', '66': '6', '67': '1', '68': '3',
                    '70': '2', '71': '9', '72': '1', '73': '4', '74': '3', '75': '6', '76': '8', '77': '7', '78': '5',
                    '80': '7', '81': '3', '82': '6', '83': '1', '84': '8', '85': '5', '86': '4', '87': '2', '88': '9'}];