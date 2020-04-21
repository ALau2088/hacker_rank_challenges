def height(root):
    maxlevel = 0
    def _recursion(level, node):
        nonlocal maxlevel
        #  base case- no left or right child
        if not node.left and not node.right: 
            if level > maxlevel:
                maxlevel = level
            return
        else:
            if node.left:
                addlevel= level + 1
                _recursion(addlevel, node.left)
            if node.right:
                addlevel = level + 1
                _recursion(addlevel, node.right)
    _recursion(0, root)
    
    return maxlevel