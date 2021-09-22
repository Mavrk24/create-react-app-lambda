from anytree import Node, RenderTree,AsciiStyle,PreOrderIter
from anytree.dotexport import RenderTreeGraph

root = Node('root', value = 'null', label='') 
a1 = Node('คุณใช้งานคอมพิวเตอร์หรือโน๊ตบุ๊คมากกว่า 3 ชั่วโมงต่อวันหรือไม่ ?', parent=root, value='null',children=[ #1
    Node('คุณใช้งานโน๊ตบุ๊คบนเตียงหรือโซฟาหรือไม่ ?',  value='null',label='Have a life'),#2
    Node('คุณใช้งานโน๊ตบุ๊คโดยวางบนหน้าตักหรือไม่ ?',  value='null',label='Have a life'), #3
    Node('คุณต้องก้มหน้าลงมองหน้าจอหรือไม่ ?', value='null',label='Have a life')], label='') #4s
a2 = Node('คุณต้องก้มหน้าเวลาพิมพ์หรือไม่ ?', parent=root , value='null',label='')
b11 = Node('คุณใช้งานแท็บเล็ตมากกว่า 3 ชั่วโมงต่อวันหรือไม่ ?', parent=root, value='null',children=[
    Node('คุณวางแท็บเล็ตบนโต๊ะ หน้าตัก หรือเตียงหรือไม่ ?',  value='null',label='')], label='') #7
b2 = Node('คุณใช้งานแท็บเล็ตโดยไม่มีอุปกรณ์เสริมช่วยในการตั้ง เช่น Standing case ?', parent=root, value='null',label='') #8
c = Node('คุณทำงานวาดเขียนเป็นประจำหรือไม่ ?', parent=root, value='null',label='')
c1 = Node('คุณทำงานวาดเขียนบนโต๊ะหรือไม่ ?', parent=c, value='null',label='')
c11 = Node('โต๊ะที่คุณใช้ทำงานวาดเขียนมีความชันที่เหมาะสมหรือไม่ ?', parent=c1, value='null',label='') #11s
d = Node('เก้าอี้ที่คุณนั่งไม่มีที่พักแขนใช่หรือไม่ ?', parent=root, value='null',label='')
d1 = Node('เก้าอี้ที่คุณนั่งไม่มีส่วนที่รองรับน้ำหนักในช่วงเอวใช่หรือไม่ ?', parent=d, value='null',label='')

arr = []
for a in PreOrderIter(root):
    arr.append(a.name)

def getQ():
    return arr

val = []
for a in PreOrderIter(root):
    val.append(a.depth)

def valuate():
    return val

def returnnotQ(arr):
    array = []
    for a in PreOrderIter(root):
        array.append(a.name)
    return array

def returnQ(t):
    inputs = []
    x = ''
    for a in PreOrderIter(root):
        x = a.name
        inputs.append(x)
    return inputs

def returnofQ(arr):
    return len(arr)

def func():   
    for a in PreOrderIter(root):
        b = a.parent
        if b != None:
            if (b.value != 'N'):
                print(a.name)
                a.value = input(': ')
            else:
                if (a.children!=None):   
                    del a.children
max = -1
max_q = ''
for a in PreOrderIter(root):
    if (a.value=='Y'):
        if(a.depth >= max):
            max = a.depth
            max_q = a.name
    else:
        a.parent = None

def display():
    return max_q
