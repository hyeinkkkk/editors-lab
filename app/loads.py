from os import path
import csv


# xl_path = '/datas/moon_data.csv'
# cwd_xl = path.dirname(path.abspath(__file__)) + xl_path
# dir_strings = cwd_xl.split("/")
# # dir_strings = [i for i in dir_strings if i!="db"]
# dir_strings = [i for i in dir_strings]
# import_xl_path = "/".join(dir_strings)


# moon_data_list = []

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

    def get_moon_data_list(self):
        full_path = self.get_static_file_path("moon_data.csv")
        moon_data_list = self.read_csv(full_path)
        return moon_data_list

    def get_ahn1_data_list(self):
        full_path = self.get_static_file_path("ahn1_data.csv")
        ahn1_data = self.read_csv(full_path)
        return ahn1_data

    def get_static_file_path(self, file_name):
        xl_path = '/datas/'+file_name
        cwd_xl = path.dirname(path.abspath(__file__)) + xl_path
        dir_strings = cwd_xl.split("/")
        # dir_strings = [i for i in dir_strings if i!="db"]
        dir_strings = [i for i in dir_strings]
        import_xl_path = "/".join(dir_strings)
        return import_xl_path

# Csv().read_csv(import_xl_path)
