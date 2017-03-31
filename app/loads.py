from os import path
import csv


xl_path = '/datas/assembly.csv'
cwd_xl = path.dirname(path.abspath(__file__)) + xl_path
dir_strings = cwd_xl.split("/")
# dir_strings = [i for i in dir_strings if i!="db"]
dir_strings = [i for i in dir_strings]
import_xl_path = "/".join(dir_strings)





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
                if row['name'] == "문재인":
                    print("")
                    # print("row ??? ",row)
#                     19531110


Csv().read_csv(import_xl_path)