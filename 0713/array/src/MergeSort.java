import java.util.LinkedList;

public class MergeSort {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
        list.add(38);
        list.add(27);
        list.add(43);
        list.add(3);
        list.add(9);
        list.add(82);
        list.add(10);
        System.out.println("Before sorting : " + list);
        list = mergeSort(list);
        System.out.println("After sorting  : " + list);
    }

    public static LinkedList<Integer> mergeSort(LinkedList<Integer> list) {
        // base case
        if (list.size() <= 1)
            return list;

        LinkedList<Integer> firstHalf = new LinkedList<>();
        LinkedList<Integer> secondHalf = new LinkedList<>();
        int count = 0;
        boolean isEven = list.size() % 2 == 0;

        // split list into two halves
        for (Integer i : list) {
            if (isEven) {
                if (count < list.size() / 2)
                    firstHalf.add(i);
                else
                    secondHalf.add(i);
            } else {
                if (count <= list.size() / 2)
                    firstHalf.add(i);
                else
                    secondHalf.add(i);
            }
            count++;
        }

        System.out.println("Splitting: " + list);

        // recursively sort
        firstHalf = mergeSort(firstHalf);
        secondHalf = mergeSort(secondHalf);

        System.out.println("Merging: " + firstHalf + " and " + secondHalf);

        return merge(firstHalf, secondHalf);
    }

    public static LinkedList<Integer> merge(LinkedList<Integer> a, LinkedList<Integer> b) {
        LinkedList<Integer> result = new LinkedList<>();

        // merge two sorted lists
        while (!a.isEmpty() && !b.isEmpty()) {
            if (a.peek() <= b.peek())
                result.add(a.poll());
            else
                result.add(b.poll());
        }

        // append remaining elements
        while (!a.isEmpty())
            result.add(a.poll());
        while (!b.isEmpty())
            result.add(b.poll());

        return result;
    }
}
