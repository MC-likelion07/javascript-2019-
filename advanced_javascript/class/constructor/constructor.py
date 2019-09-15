class Lion:
    def __init__(self, name):
        self.name = name
        # self는 전달된 객체
        # self.name은 인스턴스 변수

    def getName(self):
        print("내 이름은 " + self.name)


myLion = Lion("King")
myLion.getName()
