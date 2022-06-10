import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) { }

  // prisma does dto work for u, besides validation
  create(createBookDto: Prisma.BookCreateInput) {
    return this.prisma.book.create({
      data: createBookDto,
    })
  }

  // this is how u do joins
  findAll() {
    return this.prisma.book.findMany({
      include: {
        author: true,
      },
    })

    // this is how u can select specific values
    return this.prisma.book.findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    })
  }

  findOne(where: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.findUnique({
      where,
    })
  }

  update(where: Prisma.BookWhereUniqueInput, data: Prisma.BookUpdateInput) {
    return this.prisma.book.update({
      data,
      where,
    })
  }

  remove(where: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.delete({
      where,
    })
  }
}
