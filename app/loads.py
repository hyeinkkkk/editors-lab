from os import path
import csv


xl_path = '/datas/moon_data.csv'
cwd_xl = path.dirname(path.abspath(__file__)) + xl_path
dir_strings = cwd_xl.split("/")
# dir_strings = [i for i in dir_strings if i!="db"]
dir_strings = [i for i in dir_strings]
import_xl_path = "/".join(dir_strings)


moon_data_list = []

class Singleton(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls]

class Csv(metaclass=Singleton):
    def read_csv(self,file_name):
        with open(file_name, 'r') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                # print("row ??? ",row)
                moon_data_list.append(row)
#                     19531110

    def get_moon_data_list(self):
        return moon_data_list

Csv().read_csv(import_xl_path)
