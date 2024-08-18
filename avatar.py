import random

def create_matrix(size):
    matrix = []
    for i in range(size):
        row = []
        for j in range(size):
            row.append(0)
        matrix.append(row)
    return matrix

def display_img(img):
    size = len(img)
    for i in range(size):
        for j in range(size):
            if img[i][j]:
                print('# ', end='')
            else:
                print('- ', end='')
        print()

def randomize_img(img):
    size = len(img)
    for i in range(size):
        for j in range(size // 2 + 1):
            img[i][j] = random.randint(0, 1)
    
    for i in range(size):
        for j in range(size // 2):
            img[i][size - j - 1] = img[i][j]
            

if __name__ == "__main__":
    n = 5
    img = create_matrix(n)
    randomize_img(img)
    display_img(img)
    

