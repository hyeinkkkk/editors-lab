from os import path
import csv


class Singleton(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls]

class Csv(metaclass=Singleton):
    def read_csv(self,full_path):
        list = []
        with open(full_path, 'r') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                # print("row ??? ",row)
                list.append(row)
        return list
#                     19531110

    def get_person_data_list(self, person_name):
        full_path = self.get_static_file_path(person_name+"_data.csv")
        data_list = self.read_csv(full_path)
        return data_list


    def get_static_file_path(self, file_name):
        xl_path = '/datas/'+file_name
        cwd_xl = path.dirname(path.abspath(__file__)) + xl_path
        dir_strings = cwd_xl.split("/")
        # dir_strings = [i for i in dir_strings if i!="db"]
        dir_strings = [i for i in dir_strings]
        import_xl_path = "/".join(dir_strings)
        return import_xl_path

# Csv().read_csv(import_xl_path)
