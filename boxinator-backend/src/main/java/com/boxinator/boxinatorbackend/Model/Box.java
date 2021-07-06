package com.boxinator.boxinatorbackend.Model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Box
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generation of id field
    private Integer id;

    private String name; // Name of receiver

    private Integer weight; // Weight of box

    private String color; // Colour of box

    private String country; // Country origin

    public Box() // Default constructor
    {

    }

    public Box(Integer id, String name, int weight, String color, String country) // Parametarized constructor
    {
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.color = color;
        this.country = country;
    }

    /*
        Getters and setters for the variables
     */
    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Integer getWeight()
    {
        return weight;
    }

    public void setWeight(Integer weight)
    {
        this.weight = weight;
    }

    public String getColor()
    {
        return color;
    }

    public void setColor(String color)
    {
        this.color = color;
    }

    public String getCountry()
    {
        return country;
    }

    public void setCountry(String country)
    {
        this.country = country;
    }
}